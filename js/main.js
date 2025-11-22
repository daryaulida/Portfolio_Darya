/* === SUPER SMOOTH SCROLL === */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
            e.preventDefault();
            const target = document.querySelector(targetId);

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

            // Закрыть мобильное меню, если открыто
            closeMobileMenu();
        }
    });
});

/* === MOBILE MENU === */
const burger = document.querySelector(".header__burger");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".mobile-nav__overlay");
const closeBtn = document.querySelector(".mobile-nav__close");

function openMobileMenu() {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden"; 
}

function closeMobileMenu() {
    mobileNav.classList.remove("active");
    document.body.style.overflow = ""; 
}

if (burger) {
    burger.addEventListener("click", openMobileMenu);
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileMenu);
}

if (overlay) {
    overlay.addEventListener("click", closeMobileMenu);
}

// Закрытие по клику на ссылку
document.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

/* === REVEAL ANIMATION === */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.86;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
