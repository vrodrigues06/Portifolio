import outsideEvent from "./outsideEvent.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("#btn-mobile");
  const menuList = document.querySelector(".header-menu");
  const events = ["click", "touchstart"];

  function openMenu(event) {
    event.preventDefault();
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideEvent(menuList, events, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  events.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu);
  });
}
