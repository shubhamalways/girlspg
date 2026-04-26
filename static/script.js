// ==================== PG DATA (10 PGs) ====================
const pgsData = [
  { id: 1, name: "Sunshine Orchid PG", location: "Sector 45, Gurugram", price: 12500, lat: 28.4595, lng: 77.0946,
    images: [ "https://images.pexels.com/photos/14021929/pexels-photo-14021929.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6876603/pexels-photo-6876603.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6129971/pexels-photo-6129971.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 2, name: "Lavanya Elite Ladies PG", location: "Sector 15, Faridabad", price: 15800, lat: 28.4089, lng: 77.3178,
    images: [ "https://images.pexels.com/photos/29000006/pexels-photo-29000006.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/13871333/pexels-photo-13871333.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6130040/pexels-photo-6130040.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 3, name: "Parivar PG", location: "Hisar, Haryana", price: 9900, lat: 29.1492, lng: 75.7217,
    images: [ "https://images.pexels.com/photos/14532311/pexels-photo-14532311.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/30070557/pexels-photo-30070557.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/33454123/pexels-photo-33454123.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 4, name: "Rose Petal PG ", location: "Hansi, Haryana", price: 11200, lat: 29.3991, lng: 76.9686,
    images: [   "https://images.pexels.com/photos/29000012/pexels-photo-29000012.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/13872664/pexels-photo-13872664.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/27582052/pexels-photo-27582052.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 5, name: "Orange Vatika PG", location: "Karnal, Haryana", price: 8500, lat: 29.6857, lng: 76.9905,
    images: [ "https://images.pexels.com/photos/14022458/pexels-photo-14022458.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/30628780/pexels-photo-30628780.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/9056705/pexels-photo-9056705.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 6, name: "Rohtak Home PG", location: "Rohtak, Haryana", price: 7800, lat: 28.8955, lng: 76.6066,
    images: ["https://images.pexels.com/photos/6876830/pexels-photo-6876830.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/14619390/pexels-photo-14619390.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7163611/pexels-photo-7163611.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 7, name: "Ambala Residency PG", location: "Ambala, Haryana", price: 9200, lat: 30.3782, lng: 76.7729,
    images: [ "https://images.pexels.com/photos/29000313/pexels-photo-29000313.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/30628780/pexels-photo-30628780.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7163599/pexels-photo-7163599.jpeg?auto=compress&cs=tinysrgb&w=600"
] },
  { id: 8, name: "Kurukshetra Shanti PG", location: "Kurukshetra, Haryana", price: 8200, lat: 29.9695, lng: 76.8783,
    images: ["https://images.pexels.com/photos/35261473/pexels-photo-35261473.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/9056661/pexels-photo-9056661.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7163598/pexels-photo-7163598.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 9, name: "Suncity PG", location: "Sonipat, Haryana", price: 8900, lat: 28.9933, lng: 77.0150,
    images: [  "https://images.pexels.com/photos/36777160/pexels-photo-36777160.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/19737867/pexels-photo-19737867.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7163666/pexels-photo-7163666.jpeg?auto=compress&cs=tinysrgb&w=600"] },
  { id: 10, name: "Elegant PG", location: "Yamunanagar, Haryana", price: 7500, lat: 30.0958, lng: 77.2851,
    images: [  "https://images.pexels.com/photos/14465275/pexels-photo-14465275.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/19737866/pexels-photo-19737866.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/9056664/pexels-photo-9056664.jpeg?auto=compress&cs=tinysrgb&w=600"
] }
];

// ==================== GLOBAL VARIABLES ====================
let currentUser = null;
let homeMap = null;
let fullMap = null;

// ==================== API BASE ====================
const API_BASE = "/api";
fetch("/api")

// ==================== RAZORPAY KEYS (Test Mode) ====================
const RAZORPAY_KEY = 'rzp_test_SgZziCmSBjCyHC'; // Replace with your actual test key

// ==================== HELPER FUNCTIONS ====================
function showToast(message, isError = false) {
    // Create toast container if not exists
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    
    // Clear previous timeout
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    if (window.toastAnimation) clearTimeout(window.toastAnimation);
    
    // Set content
    const isSuccess = !isError;
    toast.className = `toast ${isSuccess ? 'success' : 'error'}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon"></div>
            <div class="toast-message">${escapeHtml(message)}</div>
            <div class="toast-close">✕</div>
        </div>
        <div class="toast-progress"></div>
    `;
    
    // Add close button functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.onclick = () => {
        toast.classList.remove("show");
        window.toastAnimation = setTimeout(() => {
            toast.innerHTML = '';
        }, 300);
    };
    
    // Show toast
    setTimeout(() => toast.classList.add("show"), 10);
    
    // Auto hide after 3.5 seconds
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        window.toastAnimation = setTimeout(() => {
            if (toast && toast.parentNode) toast.innerHTML = '';
        }, 300);
    }, 3500);
}

// Helper to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== API CALLS ====================
async function registerUser(name, email, password) {
    const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function loginUser(email, password) {
    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function createRazorpayOrder(bookingData) {
    const res = await fetch(`${API_BASE}/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function verifyRazorpayPayment(orderId, paymentId, signature, bookingId) {
    const res = await fetch(`${API_BASE}/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            order_id: orderId,
            payment_id: paymentId,
            signature: signature,
            booking_id: bookingId
        })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function fetchReviews(pgId) {
    const res = await fetch(`${API_BASE}/reviews/${pgId}`);
    const data = await res.json();
    return data;
}

async function submitReview(pgId, username, rating, comment) {
    const res = await fetch(`${API_BASE}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pg_id: pgId, username, rating, comment })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function submitContact(name, email, message) {
    const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    return data;
}

async function loadMyBookings() {
    if (!currentUser) return;
    const container = document.getElementById("bookingsList");
    if (!container) return;
    container.innerHTML = '<p style="text-align:center;">Loading your bookings...</p>';
    try {
        const res = await fetch(`${API_BASE}/my-bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: currentUser.email })
        });
        const bookings = await res.json();
        if (!res.ok) throw new Error(bookings.error);
        
        if (bookings.length === 0) {
            container.innerHTML = '<p style="text-align:center;">You have no bookings yet. Go to <a href="#" data-page="pgs" style="color:#d45c7a;">PGs</a> to book one!</p>';
            return;
        }
        
        let html = `<div style="overflow-x: auto;">
            <table style="width:100%; border-collapse: collapse;">
                <thead style="background:#ffe5ec;">
                    <tr><th style="padding:14px;">PG Name</th><th>Check In</th><th>Check Out</th><th>Amount (₹)</th><th>Transaction ID</th><th>Status</th><th>Booking Date</th></tr>
                </thead>
                <tbody>`;
        bookings.forEach(b => {
            const statusColor = b.payment_status === 'paid' ? '#2c7a2c' : '#e67e9f';
            html += `<tr style="border-bottom:1px solid #ffe0d4;">
                        <td style="padding:12px;">${escapeHtml(b.pg_name)}</td>
                        <td style="padding:12px;">${b.check_in}</td>
                        <td style="padding:12px;">${b.check_out}</td>
                        <td style="padding:12px;">₹${b.amount}</td>
                        <td style="padding:12px;">${b.transaction_id}</td>
                        <td style="padding:12px; color:${statusColor}; font-weight:600;">${b.payment_status}</td>
                        <td style="padding:12px;">${new Date(b.booking_date).toLocaleString()}</td>
                      </tr>`;
        });
        html += `</tbody></table></div>`;
        container.innerHTML = html;
    } catch (err) {
        container.innerHTML = `<p style="text-align:center; color:red;">Failed to load bookings: ${err.message}</p>`;
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ==================== RENDER PG CARDS ====================
async function renderPGs() {
    const grid = document.getElementById("pgGrid");
    if (!grid) return;
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    let filtered = pgsData.filter(pg => pg.name.toLowerCase().includes(searchTerm) || pg.location.toLowerCase().includes(searchTerm));
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">✨ No PG found ✨</div>`;
        return;
    }
    grid.innerHTML = "";
    for (const pg of filtered) {
        const reviews = await fetchReviews(pg.id);
        const avgRating = reviews.length ? (reviews.reduce((a,b)=> a + b.rating, 0) / reviews.length).toFixed(1) : 0;
        const recentReviews = reviews.slice(0, 2);
        const slidesHtml = `<div class="slider-container" id="slider-${pg.id}">
            <img class="slider-img" id="img-${pg.id}" src="${pg.images[0]}">
            <button class="slider-btn prev-btn" data-id="${pg.id}"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-btn next-btn" data-id="${pg.id}"><i class="fas fa-chevron-right"></i></button>
        </div>`;
        let reviewsHtml = `<div class="reviews-list">`;
        if (recentReviews.length === 0) reviewsHtml += `<i>No reviews yet. Be first!</i>`;
        else recentReviews.forEach(rev => {
            reviewsHtml += `<div class="review-item"><b>${rev.username}</b> ${'⭐'.repeat(rev.rating)}<br>${rev.comment.substring(0,60)}</div>`;
        });
        reviewsHtml += `</div>`;
        const card = document.createElement("div");
        card.className = "pg-card";
        card.innerHTML = `
            ${slidesHtml}
            <div class="card-content">
                <div class="pg-name">${pg.name}</div>
                <div class="price">₹ ${pg.price}/month</div>
                <div class="location"><i class="fas fa-map-marker-alt"></i> ${pg.location}</div>
                <div class="rating"><span class="stars">${'⭐'.repeat(Math.floor(avgRating))} ${avgRating}</span> (${reviews.length} reviews)</div>
                ${reviewsHtml}
                <div class="card-actions">
                    <button class="btn-outline book-btn" data-id="${pg.id}" data-name="${pg.name}" data-price="${pg.price}">📖 Book & Pay</button>
                    <button class="btn-outline review-btn" data-id="${pg.id}" data-name="${pg.name}">✍️ Rate & Review</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
    attachSliderEvents();
    attachBookingReviewEvents();
}

function attachSliderEvents() {
    document.querySelectorAll(".prev-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const pgId = parseInt(btn.dataset.id);
            const pg = pgsData.find(p => p.id === pgId);
            let idx = window[`slideIdx_${pgId}`] || 0;
            idx = (idx - 1 + pg.images.length) % pg.images.length;
            window[`slideIdx_${pgId}`] = idx;
            document.getElementById(`img-${pgId}`).src = pg.images[idx];
        };
    });
    document.querySelectorAll(".next-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const pgId = parseInt(btn.dataset.id);
            const pg = pgsData.find(p => p.id === pgId);
            let idx = window[`slideIdx_${pgId}`] || 0;
            idx = (idx + 1) % pg.images.length;
            window[`slideIdx_${pgId}`] = idx;
            document.getElementById(`img-${pgId}`).src = pg.images[idx];
        };
    });
}

function attachBookingReviewEvents() {
    document.querySelectorAll(".book-btn").forEach(btn => {
        btn.onclick = () => {
            if (!currentUser) { showToast("Please login first!", true); openAuthModal(); return; }
            const pgId = parseInt(btn.dataset.id);
            const pgName = btn.dataset.name;
            const pgPrice = btn.dataset.price;
            document.getElementById("bookPgId").value = pgId;
            document.getElementById("bookPgName").innerHTML = `<strong>${pgName}</strong> – ₹${pgPrice}/month`;
            document.getElementById("bookName").value = currentUser.name;
            document.getElementById("bookEmail").value = currentUser.email;
            document.getElementById("bookingModal").style.display = "flex";
        };
    });
    document.querySelectorAll(".review-btn").forEach(btn => {
        btn.onclick = () => {
            if (!currentUser) { showToast("Please login first!", true); openAuthModal(); return; }
            document.getElementById("reviewPgId").value = btn.dataset.id;
            document.getElementById("reviewPgTitle").innerHTML = `<strong>${btn.dataset.name}</strong>`;
            document.getElementById("reviewModal").style.display = "flex";
        };
    });
}

// ==================== CLOSE BUTTON FIX ====================
// Booking modal close button
document.getElementById("closeBooking").onclick = () => {
    document.getElementById("bookingModal").style.display = "none";
};
// Auth modal close button
document.getElementById("closeAuth").onclick = () => {
    document.getElementById("authModal").style.display = "none";
};
// Review modal close button
document.getElementById("closeReview").onclick = () => {
    document.getElementById("reviewModal").style.display = "none";
};
// Click outside modal to close (optional)
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

// ==================== PAYMENT & BOOKING ====================
document.getElementById("payAndConfirmBtn").onclick = async () => {
    if (!currentUser) { showToast("Please login", true); document.getElementById("bookingModal").style.display = "none"; openAuthModal(); return; }
    
    const name = document.getElementById("bookName").value.trim();
    const email = document.getElementById("bookEmail").value.trim();
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const specialRequest = document.getElementById("specialReq").value;
    
    if (!name || !email || !checkIn || !checkOut) {
        showToast("Fill all booking fields", true);
        return;
    }
    
    const pgId = parseInt(document.getElementById("bookPgId").value);
    const pg = pgsData.find(p => p.id === pgId);
    
    const btn = document.getElementById("payAndConfirmBtn");
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Creating Order...';
    btn.disabled = true;
    
    try {
        const orderData = {
            pg_id: pg.id,
            pg_name: pg.name,
            guest_name: name,
            email: email,
            check_in: checkIn,
            check_out: checkOut,
            special_request: specialRequest,
            amount: pg.price,
            booked_by_email: currentUser.email
        };
        const order = await createRazorpayOrder(orderData);
        
        const options = {
            key: RAZORPAY_KEY,
            amount: order.amount * 100,
            currency: 'INR',
            name: 'Girls PG',
            description: `Booking for ${pg.name}`,
            order_id: order.order_id,
            handler: async function(response) {
                try {
                    const verification = await verifyRazorpayPayment(
                        response.razorpay_order_id,
                        response.razorpay_payment_id,
                        response.razorpay_signature,
                        order.booking_id
                    );
                    if (verification.success) {
                        showToast(`✅ Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
                        document.getElementById("bookingModal").style.display = "none";
                        document.getElementById("bookName").value = "";
                        document.getElementById("bookEmail").value = "";
                        document.getElementById("checkIn").value = "";
                        document.getElementById("checkOut").value = "";
                        document.getElementById("specialReq").value = "";
                        if (document.getElementById("bookingsPage").classList.contains('active')) {
                            loadMyBookings();
                        }
                    }
                } catch (err) {
                    showToast("Payment verification failed: " + err.message, true);
                }
            },
            prefill: {
                name: currentUser.name,
                email: currentUser.email
            },
            theme: { color: '#d45c7a' },
            modal: { ondismiss: function() { showToast("Payment cancelled", true); } }
        };
        const razorpay = new Razorpay(options);
        razorpay.open();
    } catch (err) {
        showToast("Failed to create order: " + err.message, true);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
};

// ==================== REVIEW SUBMISSION ====================
document.getElementById("submitReviewBtn").onclick = async () => {
    if (!currentUser) { showToast("Login required", true); document.getElementById("reviewModal").style.display = "none"; openAuthModal(); return; }
    const pgId = parseInt(document.getElementById("reviewPgId").value);
    const rating = parseInt(document.getElementById("ratingStars").value);
    const comment = document.getElementById("reviewComment").value.trim();
    if (!comment) { showToast("Write a review", true); return; }
    try {
        await submitReview(pgId, currentUser.name, rating, comment);
        showToast("Thank you for your review!");
        document.getElementById("reviewModal").style.display = "none";
        renderPGs();
        document.getElementById("reviewComment").value = "";
    } catch (err) { showToast(err.message, true); }
};

// ==================== CONTACT FORM ====================
document.getElementById("contactSubmitBtn").onclick = async () => {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
    if (!name || !email || !message) { alert("Please fill all fields"); return; }
    try {
        await submitContact(name, email, message);
        alert("Message sent successfully!");
        document.getElementById("contactName").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactMessage").value = "";
    } catch (err) { alert("Failed: " + err.message); }
};

// ==================== AUTH MODAL ====================
const authModal = document.getElementById("authModal");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const authNameInput = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPass = document.getElementById("authPassword");
const authTitle = document.getElementById("authTitle");
let isLoginMode = true;

function openAuthModal() { authModal.style.display = "flex"; isLoginMode = true; updateAuthUIModal(); }
function updateAuthUIModal() {
    if (isLoginMode) {
        authTitle.innerText = "Login";
        authNameInput.style.display = "none";
        authSubmitBtn.innerText = "Login";
        document.getElementById("switchToSignup").innerText = "Sign up here";
    } else {
        authTitle.innerText = "Sign Up";
        authNameInput.style.display = "block";
        authSubmitBtn.innerText = "Create Account";
        document.getElementById("switchToSignup").innerText = "Back to Login";
    }
}
document.getElementById("switchToSignup").onclick = (e) => { e.preventDefault(); isLoginMode = !isLoginMode; updateAuthUIModal(); };
authSubmitBtn.onclick = async () => {
    const email = authEmail.value.trim();
    const pass = authPass.value.trim();
    if (!email || !pass) { showToast("Email and password required", true); return; }
    if (isLoginMode) {
        try {
            const user = await loginUser(email, pass);
            currentUser = user;
            authModal.style.display = "none";
            updateAuthUI();
            renderPGs();
            showToast(`Welcome ${user.name}`);
            if (document.getElementById("bookingsPage").classList.contains('active')) loadMyBookings();
        } catch (err) { showToast(err.message, true); }
    } else {
        const name = authNameInput.value.trim();
        if (!name) { showToast("Full name needed", true); return; }
        try {
            await registerUser(name, email, pass);
            showToast("Signup success! Please login");
            isLoginMode = true;
            updateAuthUIModal();
        } catch (err) { showToast(err.message, true); }
    }
};
document.getElementById("authBtn").onclick = openAuthModal;

// ==================== LOGOUT UI ====================
function updateAuthUI() {
    const authBtn = document.getElementById("authBtn");
    const userSpan = document.getElementById("userStatus");
    const bookingsLink = document.getElementById("bookingsNavLink");
    if (currentUser) {
        authBtn.textContent = "Logout";
        authBtn.onclick = () => { currentUser = null; updateAuthUI(); showToast("Logged out"); switchPage('pgs'); };
        userSpan.innerHTML = `<i class="fas fa-user-circle"></i> ${currentUser.name}`;
        if (bookingsLink) bookingsLink.style.display = "inline-block";
    } else {
        authBtn.textContent = "Login / Signup";
        authBtn.onclick = openAuthModal;
        userSpan.innerHTML = "";
        if (bookingsLink) bookingsLink.style.display = "none";
    }
}

// ==================== MAPS ====================


function initFullMap() {
    const container = document.getElementById("fullMap");
    if (!container) return;
    try {
        if (fullMap) fullMap.remove();
        fullMap = L.map('fullMap').setView([29.0588, 76.0856], 8);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; OpenStreetMap' }).addTo(fullMap);
        pgsData.forEach(pg => L.marker([pg.lat, pg.lng]).addTo(fullMap).bindPopup(`<b>${pg.name}</b><br>${pg.location}<br>₹${pg.price}`));
    } catch(e) { container.innerHTML = "<p>Map error</p>"; }
}

function renderLocationList() {
    const listDiv = document.getElementById("pgLocationsList");
    if (!listDiv) return;
    listDiv.innerHTML = "";
    pgsData.forEach(pg => {
        const item = document.createElement("div");
        item.className = "location-list-item";
        item.innerHTML = `<i class="fas fa-home"></i><div style="flex:1"><div class="loc-name">${pg.name}</div><div class="loc-address"><i class="fas fa-map-marker-alt"></i> ${pg.location}</div></div><i class="fas fa-rupee-sign"></i> ${pg.price}`;
        item.onclick = () => { if (fullMap) fullMap.setView([pg.lat, pg.lng], 14); };
        listDiv.appendChild(item);
    });
}

// ==================== PAGE SWITCHING ====================
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`${pageId}Page`).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');

    if (pageId === 'pgs') {
        renderPGs();
        setTimeout(() => { if (homeMap) homeMap.invalidateSize(); else initHomeMap(); }, 100);
    }
    if (pageId === 'location') {
        initFullMap();
        renderLocationList();
        setTimeout(() => { if (fullMap) fullMap.invalidateSize(); }, 100);
    }
    if (pageId === 'bookings') {
        loadMyBookings();
    }
    function ensureMap() {
    if (!initHomeMap()) {
        setTimeout(ensureMap, 500); // retry after 500ms
    }
}
// Call ensureMap() when the PGs page is shown.
}

// ==================== SEARCH ====================
document.getElementById("searchBtn").onclick = () => renderPGs();
document.getElementById("searchInput").addEventListener("keyup", (e) => { if (e.key === "Enter") renderPGs(); });

// ==================== INITIALIZE ====================
document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.onclick = (e) => { e.preventDefault(); switchPage(link.dataset.page); };
});
switchPage('pgs');
initHomeMap();
updateAuthUI();
// Force add developer section and mini map if missing
// ========== FIX MISSING SECTIONS (mini map + about/contact + developers) ==========
function addMissingSections() {
    const pgGrid = document.getElementById('pgGrid');
    if (!pgGrid) return;
    
    // Check if about/map section already exists
    if (!document.getElementById('aboutMapSection')) {
        const sectionDiv = document.createElement('div');
        sectionDiv.id = 'aboutMapSection';
        sectionDiv.style.display = 'flex';
        sectionDiv.style.flexWrap = 'wrap';
        sectionDiv.style.gap = '20px';
        sectionDiv.style.padding = '20px 5%';
        sectionDiv.style.background = '#fff5f0';
        sectionDiv.style.marginTop = '20px';
        sectionDiv.innerHTML = `
            <div style="flex: 1.5; min-width: 250px;">
                <div id="homeMiniMap" style="height: 200px; border-radius: 24px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);"></div>
            </div>
            <div style="flex: 1; background: white; border-radius: 24px; padding: 15px 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <h3 style="color:#b13e5c;">✨ About Girls PG</h3>
                <p style="font-size: 0.9rem; margin-top: 8px;">Trusted platform for women’s PG accommodations across Haryana. Verified listings, secure bookings.</p>
                <h3 style="color:#b13e5c; margin-top: 12px;">📞 Contact</h3>
                <p style="font-size: 0.9rem;">📧 hello@girlspg.com | 📞 +91 98765 43210</p>
            </div>
        `;
        pgGrid.insertAdjacentElement('afterend', sectionDiv);
        console.log("✅ About/map section added");
    }
    
    // Check if developers section exists
    if (!document.getElementById('devSection')) {
        const devSection = document.createElement('div');
        devSection.id = 'devSection';
        devSection.style.textAlign = 'center';
        devSection.style.padding = '40px 5%';
        devSection.style.background = '#fff9f5';
        devSection.innerHTML = `
            <h2 style="color:#b13e5c; margin-bottom:30px;">The Developers</h2>
            <div style="display:flex; justify-content:center; gap:50px; flex-wrap:wrap;">
                <div><h3>Rekha</h3><p style="color:#6b5e5e;">Backend & Database Architect</p></div>
                <div><h3>Preeti</h3><p style="color:#6b5e5e;">Frontend & UI Designer</p></div>
            </div>
        `;
        document.getElementById('pgsPage').appendChild(devSection);
        console.log("✅ Developers section added");
    }
    
    // Initialize map now that container exists
    setTimeout(initHomeMap, 200);
}

// Correct map initialization function
function initHomeMap() {
    const container = document.getElementById("homeMiniMap");
    if (!container) return;
    if (window.homeMap) window.homeMap.remove();
    try {
        window.homeMap = L.map('homeMiniMap').setView([29.0588, 76.0856], 7);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(window.homeMap);
        pgsData.forEach(pg => {
            L.marker([pg.lat, pg.lng]).addTo(window.homeMap)
                .bindPopup(`<b>${pg.name}</b><br>${pg.location}<br>₹${pg.price}`);
        });
        console.log("✅ Map initialized");
    } catch(e) { console.error("Map error:", e); }
}

// Call after PG cards are rendered
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for PG cards to render first
    setTimeout(addMissingSections, 1000);
});