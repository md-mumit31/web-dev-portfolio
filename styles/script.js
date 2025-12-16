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
            menuToggle.classList.toggle("active"); // X animation
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

    /* Copy Email */
    const copyEmail = document.getElementById("copy-email");
    const emailText = document.getElementById("email-text");

    if (copyEmail) {
        copyEmail.addEventListener("click", e => {
            e.preventDefault();

            navigator.clipboard.writeText(emailText.textContent).then(() => {
                emailText.textContent = "Copied!";
                setTimeout(() => {
                    emailText.textContent = "mdmumithossain31@gmail.com";
                }, 1500);
            });
        });
    }

    /* Haptic Feedback on Click */
const hapticElements = document.querySelectorAll(".btn, .social-item");

hapticElements.forEach(el => {
  el.addEventListener("click", () => {
    if (navigator.vibrate) {
      navigator.vibrate(20); // vibrate for 20ms
    }
  });
});



});


/* Navbar scroll behavior */
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

function handleScroll() {
    const currentScroll = window.scrollY;

    /* Navbar glass & hide */
    if (currentScroll > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    if (currentScroll > lastScrollY && currentScroll > 100)
        header.classList.add("hide");
    else header.classList.remove("hide");

    lastScrollY = currentScroll;

    /* Scroll progress */
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    document.getElementById("scroll-progress").style.width =
        (currentScroll / scrollHeight) * 100 + "%";
}




/* 3D Tilt Effect */
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});

/* Magnetic Buttons */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0, 0)";
    });
});

const tapSound = document.getElementById('tap-sound');
document.querySelectorAll('.btn, .social-item,.nav,.cv').forEach(btn => {
    btn.addEventListener('click', () => {
        tapSound.currentTime = 0;
        tapSound.play();
    });
});
