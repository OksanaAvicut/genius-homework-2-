const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnClose = document.querySelector(".js-menu-btn-close");
const menuBtnOpen = document.querySelector(".js-menu-btn-open");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
