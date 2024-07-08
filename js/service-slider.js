const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
