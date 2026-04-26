// ===== PANEL NAVIGATION =====
function showGateway() {
    document.getElementById('authGateway').classList.remove('hidden');
    document.getElementById('loginPanel').classList.add('hidden');
    document.getElementById('signupPanel').classList.add('hidden');
}

function showPanel(panel) {
    document.getElementById('authGateway').classList.add('hidden');
    document.getElementById('loginPanel').classList.add('hidden');
    document.getElementById('signupPanel').classList.add('hidden');
    if (panel === 'login') {
        document.getElementById('loginPanel').classList.remove('hidden');
    } else if (panel === 'signup') {
        document.getElementById('signupPanel').classList.remove('hidden');
    }
}

// ===== GUEST MODE =====
function continueAsGuest() {
    localStorage.setItem('tl_mode', 'guest');
    localStorage.removeItem('tl_loggedIn');
    // Redirect to page they came from, or home
    const redirect = getRedirectTarget() || 'home.html';
    window.location.href = redirect;
}

// ===== SIGN UP =====
function signup() {
    const name     = document.getElementById('signupName').value.trim();
    const phoneNo  = document.getElementById('signupNumber').value.trim();
    const email    = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;

    const errEl = document.getElementById('signupError');
    const succEl = document.getElementById('signupSuccess');

    hideMsg('signupError'); hideMsg('signupSuccess');

    if (!name || !phoneNo || !email || !password) {
        return showMsg('signupError', 'Please fill in all fields.');
    }
    if (!isValidEmail(email)) {
        return showMsg('signupError', 'Please enter a valid email address.');
    }
    if (password.length < 6) {
        return showMsg('signupError', 'Password must be at least 6 characters.');
    }

    // Save user
    localStorage.setItem('tl_name', name);
    localStorage.setItem('tl_phone', phoneNo);
    localStorage.setItem('tl_email', email);
    localStorage.setItem('tl_password', password);
    localStorage.setItem('tl_loggedIn', 'true');
    localStorage.setItem('tl_mode', 'user');

    showMsg('signupSuccess', `Account created! Welcome, ${name}! Redirecting...`);

    setTimeout(() => {
        const redirect = getRedirectTarget() || 'home.html';
        window.location.href = redirect;
    }, 1200);
}

// ===== LOGIN =====
function login() {
    const email    = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    hideMsg('loginError');

    if (!email || !password) {
        return showMsg('loginError', 'Please enter your email and password.');
    }

    const storedEmail    = localStorage.getItem('tl_email');
    const storedPassword = localStorage.getItem('tl_password');
    const storedName     = localStorage.getItem('tl_name');

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('tl_loggedIn', 'true');
        localStorage.setItem('tl_mode', 'user');

        // Animate button
        const btn = document.querySelector('#loginPanel .auth-btn');
        if (btn) { btn.textContent = `Welcome back, ${storedName}! ✓`; btn.disabled = true; }

        setTimeout(() => {
            const redirect = getRedirectTarget() || 'home.html';
            window.location.href = redirect;
        }, 900);
    } else {
        showMsg('loginError', 'Invalid email or password. Please try again.');
    }
}

// ===== KEYBOARD ENTER SUPPORT =====
function handleLoginKey(e) {
    if (e.key === 'Enter') login();
}

// ===== PASSWORD TOGGLE =====
function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fa-solid fa-eye';
    }
}

// ===== HELPERS =====
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function showMsg(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.querySelector('span').textContent = text;
    el.classList.remove('hidden');
}
function hideMsg(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

/**
 * Reads ?redirect=quiz.html from URL so deep-linked pages
 * can bounce through login and land back at the right place.
 */
function getRedirectTarget() {
    const params = new URLSearchParams(window.location.search);
    return params.get('redirect') || null;
}

// ===== INIT: if already logged in, skip straight to destination =====
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tl_loggedIn') === 'true') {
        const redirect = getRedirectTarget() || 'home.html';
        window.location.href = redirect;
    }
});
