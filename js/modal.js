const modal = document.querySelector(".backdrop");
const modalBtnClose = document.querySelector(".js-modal-btn-close");
const modalBtnOpen = document.querySelector(".js-modal-btn-open");

const toggleModal = () => {
  modal.classList.toggle("js-is-hidden");

  if (!modal.classList.contains("js-is-hidden")) {
    stopScroll();
  } else {
    startScroll();
  }
};

modalBtnClose.addEventListener("click", toggleModal);
modalBtnOpen.addEventListener("click", toggleModal);
modal.addEventListener("click", event => {
  if (event.target === modal) {
    toggleModal();
  }
});

function stopScroll() {
  document.body.style.overflow = "hidden";
}

function startScroll() {
  document.body.style.overflow = "auto";
}
