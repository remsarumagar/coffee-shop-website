const swiper = new Swiper(".slider-container", {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

// =====================================================
// MOBILE MENU
// =====================================================

const menuOpenButton = document.querySelector(".menu-open-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const navMenu = document.querySelector(".nav-menu");

// Open mobile menu
menuOpenButton.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// Close mobile menu
menuCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Close menu when clicking a navigation link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
