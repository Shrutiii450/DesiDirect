/**
 * DesiDirect — Mobile Navigation Controller
 * Handles hamburger toggle, drawer open/close, and outside-tap closure.
 * Works on every page. Injects missing overlay/drawer if absent.
 */
(function () {
    'use strict';

    function initMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const overlay   = document.getElementById('mobileNavOverlay');
        const drawer    = document.getElementById('mobileNavDrawer');

        if (!hamburger || !overlay || !drawer) return;

        function openMenu() {
            hamburger.classList.add('open');
            overlay.classList.add('open');
            drawer.classList.add('open');
            hamburger.setAttribute('aria-expanded', 'true');
            drawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            hamburger.classList.remove('open');
            overlay.classList.remove('open');
            drawer.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            drawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', function () {
            if (drawer.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close on overlay click
        overlay.addEventListener('click', closeMenu);

        // Close on any drawer link click
        drawer.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
