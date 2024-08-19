document.querySelectorAll('.request-invite').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Request Invite feature-item coming soon!');
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});