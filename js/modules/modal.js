import outsideEvent from "./outsideEvent.js";

export default function initModal() {}

const modalContainer = document.querySelector(".modal-container");
const openButtons = document.querySelectorAll('[data-modal="open"]');
const closeButton = document.querySelector('[data-modal="fechar"]');
const modal = document.querySelector(".modal");
const events = ["click", "touchstart"];

function openModal(event) {
  event.preventDefault();
  modalContainer.classList.add("ativo");
}

function closeModal(event) {
  event.preventDefault();
  modalContainer.classList.add("closing");
  modal.classList.add("closing");
  modal.addEventListener(
    "animationend",
    () => {
      modalContainer.classList.remove("closing");
      modal.classList.remove("closing");
      modalContainer.classList.remove("ativo");
    },
    { once: true }
  );
}

function clickOutModal(event) {
  if (event.target === this) {
    closeModal(event);
  }
}

modalContainer.addEventListener("click", clickOutModal);

closeButton.addEventListener("click", closeModal);

events.forEach((userEvent) => {
  openButtons.forEach((button) => {
    button.addEventListener(userEvent, openModal);
  });
});
