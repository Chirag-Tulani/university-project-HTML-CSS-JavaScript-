// Animated counters
function animateCounter(id, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 60);
    const el = document.getElementById(id);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current.toLocaleString() + suffix;
    }, 30);
}

window.addEventListener('load', () => {
    animateCounter('stat1', 12500, '+');
    animateCounter('stat2', 200, '+');
    animateCounter('stat3', 50, '+');
    animateCounter('stat4', 15, '+');
});

// Popup
function openPopup() {
    document.getElementById('popupForm').classList.remove('hidden');
}
function closePopup() {
    document.getElementById('popupForm').classList.add('hidden');
}
function submitPopup() {
    const name = document.getElementById('popupName').value.trim();
    const email = document.getElementById('popupEmail').value.trim();
    if (!name || !email) { alert('Please fill in your name and email.'); return; }
    alert(`Thanks, ${name}! We'll reach out to ${email} shortly.`);
    closePopup();
    document.getElementById('popupName').value = '';
    document.getElementById('popupEmail').value = '';
    document.getElementById('popupService').value = '';
    document.getElementById('popupMsg').value = '';
}

// Close popup on overlay click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('popupForm').addEventListener('click', function(e) {
        if (e.target === this) closePopup();
    });
});
