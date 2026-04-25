from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
import hashlib
import uuid
import os
import razorpay
from datetime import datetime

app = Flask(__name__)
CORS(app)

# ===== REPLACE WITH YOUR ACTUAL TEST KEYS =====
RAZORPAY_KEY_ID = os.getenv('rzp_test_SgZziCmSBjCyHC')
RAZORPAY_KEY_SECRET = os.getenv('3QTFpt7CPUups0ZiYoEgOjUI')

if not RAZORPAY_KEY_ID or not RAZORPAY_KEY_SECRET:
    raise ValueError("Razorpay keys missing! Check environment variables on Render.")
# =============================================

razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))

def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pg_id INTEGER NOT NULL,
        pg_name TEXT NOT NULL,
        guest_name TEXT NOT NULL,
        email TEXT NOT NULL,
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        special_request TEXT,
        amount INTEGER NOT NULL,
        razorpay_order_id TEXT UNIQUE,
        transaction_id TEXT,
        payment_status TEXT DEFAULT 'pending',
        payment_method TEXT,
        booked_by_email TEXT NOT NULL,
        booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pg_id INTEGER NOT NULL,
        username TEXT NOT NULL,
        rating INTEGER NOT NULL,
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    # Seed reviews
    c.execute("SELECT COUNT(*) FROM reviews")
    if c.fetchone()[0] == 0:
        default_reviews = [(1, "Neha", 5, "Amazing place!"), (2, "Anjali", 5, "Luxury!"), (3, "Riya", 4, "Cozy!"), (4, "Sanya", 5, "Best PG!"), (5, "Meera", 5, "Peaceful!"), (6, "Divya", 4, "Good value!"), (7, "Simran", 4, "Nice!"), (8, "Kavita", 5, "Great food!"), (9, "Ritu", 4, "Secure!"), (10, "Pooja", 5, "Excellent!")]
        c.executemany("INSERT INTO reviews (pg_id, username, rating, comment) VALUES (?, ?, ?, ?)", default_reviews)
        conn.commit()
    conn.close()
    print("✅ Database initialized.")

init_db()

def hash_password(pwd):
    return hashlib.sha256(pwd.encode()).hexdigest()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    name, email, password = data.get('name'), data.get('email'), data.get('password')
    if not all([name, email, password]):
        return jsonify({'error': 'All fields required'}), 400
    hashed = hash_password(password)
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    try:
        c.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", (name, email, hashed))
        conn.commit()
        return jsonify({'message': 'Registered successfully'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Email already exists'}), 409
    finally:
        conn.close()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email, password = data.get('email'), data.get('password')
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT id, name, email FROM users WHERE email = ? AND password = ?", (email, hash_password(password)))
    user = c.fetchone()
    conn.close()
    if user:
        return jsonify({'id': user[0], 'name': user[1], 'email': user[2]})
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/create-order', methods=['POST'])
def create_order():
    data = request.json
    required = ['pg_id', 'pg_name', 'guest_name', 'email', 'check_in', 'check_out', 'amount', 'booked_by_email']
    if not all(k in data for k in required):
        return jsonify({'error': 'Missing fields'}), 400
    try:
        order = razorpay_client.order.create({
            'amount': int(data['amount']) * 100,
            'currency': 'INR',
            'receipt': f'booking_{uuid.uuid4().hex[:8]}',
            'payment_capture': 1
        })
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute('''INSERT INTO bookings (pg_id, pg_name, guest_name, email, check_in, check_out, special_request, amount, razorpay_order_id, payment_status, booked_by_email)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                  (data['pg_id'], data['pg_name'], data['guest_name'], data['email'],
                   data['check_in'], data['check_out'], data.get('special_request', ''),
                   data['amount'], order['id'], 'pending', data['booked_by_email']))
        booking_id = c.lastrowid
        conn.commit()
        conn.close()
        return jsonify({'success': True, 'order_id': order['id'], 'amount': data['amount'], 'booking_id': booking_id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/verify-payment', methods=['POST'])
def verify_payment():
    data = request.json
    try:
        params_dict = {
            'razorpay_order_id': data['order_id'],
            'razorpay_payment_id': data['payment_id'],
            'razorpay_signature': data['signature']
        }
        razorpay_client.utility.verify_payment_signature(params_dict)
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute("UPDATE bookings SET payment_status = 'paid', transaction_id = ? WHERE id = ?", (data['payment_id'], data['booking_id']))
        conn.commit()
        conn.close()
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/my-bookings', methods=['POST'])
def my_bookings():
    email = request.json.get('email')
    if not email:
        return jsonify({'error': 'Email required'}), 400
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT id, pg_name, check_in, check_out, amount, transaction_id, payment_status, booking_date FROM bookings WHERE booked_by_email = ? ORDER BY booking_date DESC", (email,))
    rows = c.fetchall()
    conn.close()
    bookings = [{'booking_id': r[0], 'pg_name': r[1], 'check_in': r[2], 'check_out': r[3], 'amount': r[4], 'transaction_id': r[5] or '—', 'payment_status': r[6], 'booking_date': r[7]} for r in rows]
    return jsonify(bookings)

@app.route('/api/reviews/<int:pg_id>', methods=['GET'])
def get_reviews(pg_id):
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT username, rating, comment, created_at FROM reviews WHERE pg_id = ? ORDER BY created_at DESC", (pg_id,))
    rows = c.fetchall()
    conn.close()
    return jsonify([{'username': r[0], 'rating': r[1], 'comment': r[2], 'date': r[3]} for r in rows])

@app.route('/api/reviews', methods=['POST'])
def add_review():
    data = request.json
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO reviews (pg_id, username, rating, comment) VALUES (?, ?, ?, ?)", (data['pg_id'], data['username'], data['rating'], data['comment']))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", (data['name'], data['email'], data['message']))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True, port=5000)