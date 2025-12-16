document.addEventListener("DOMContentLoaded", () => {

  /* AOS init */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  /* Typed.js init */
  if (typeof Typed !== "undefined") {
    new Typed("#typed-name", {
      strings: ["MD.Abdul Mumit Ibne Hossain"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  }

  /* Mobile navbar toggle */
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  } else {
    console.error("Navbar elements not found");
  }

});
