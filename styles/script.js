// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link (mobile UX)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });