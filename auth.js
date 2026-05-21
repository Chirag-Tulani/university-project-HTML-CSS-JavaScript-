/**
 * auth.js – shared auth state for all TechLearn pages.
 * Include at the bottom of every page's <body> AFTER common.css navbar markup.
 *
 * What it does:
 *  - Replaces the "Login" button in the navbar with user's name + logout when logged in
 *  - In guest mode shows a subtle "Guest" indicator with an upgrade prompt
 *  - Provides requireAuth(page) helper for quiz/ai_tools to optionally gate content
 */

(function () {
    function isLoggedIn() { return localStorage.getItem('tl_loggedIn') === 'true'; }
    function isGuest()    { return localStorage.getItem('tl_mode') === 'guest'; }
    function getName()    { return localStorage.getItem('tl_name') || 'User'; }

    function logout() {
        localStorage.removeItem('tl_loggedIn');
        localStorage.removeItem('tl_mode');
        window.location.href = 'loginPage.html';
    }

    function updateNavbar() {
        const loginLink = document.querySelector('.right_side a[href="loginPage.html"]');
        if (!loginLink) return;

        if (isLoggedIn()) {
            const name = getName();
            const pill = document.createElement('div');
            pill.className = 'auth-pill';
            pill.innerHTML = `
                <span class="auth-pill-name"><i class="fa-solid fa-user-circle"></i> ${name}</span>
                <button class="auth-pill-logout" title="Log out" onclick="authLogout()">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>
            `;
            loginLink.parentNode.replaceChild(pill, loginLink);
        } else if (isGuest()) {
            const pill = document.createElement('div');
            pill.className = 'auth-pill auth-pill-guest';
            pill.innerHTML = `
                <span class="auth-pill-name"><i class="fa-solid fa-user-secret"></i> Guest</span>
                <a href="loginPage.html" class="auth-pill-upgrade" title="Sign up for free">Sign Up</a>
            `;
            loginLink.parentNode.replaceChild(pill, loginLink);
        }
    }

    window.authLogout = logout;

    // Also expose requireAuth for pages that want to gate content
    // Call as: requireAuth('quiz.html')
    // If not logged in AND not guest, redirects to login page with ?redirect= set
    window.requireAuth = function (currentPage) {
        if (!isLoggedIn() && !isGuest()) {
            window.location.href = 'loginPage.html?redirect=' + encodeURIComponent(currentPage);
        }
    };

    // Run when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateNavbar);
    } else {
        updateNavbar();
    }
})();
