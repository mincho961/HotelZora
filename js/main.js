document.addEventListener("DOMContentLoaded", (event) => {
    "use strict";

    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
