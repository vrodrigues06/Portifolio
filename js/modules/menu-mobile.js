import outsideEvent from "./outsideEvent.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("#btn-mobile");
  const menuList = document.querySelector(".header-menu");
  const itemMenu = document.querySelectorAll(".header-menu li");

  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideEvent(menuList, events, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
      menuList.classList.add("closing");
      menuButton.classList.add("closing");
      menuList.addEventListener(
        "animationend",
        () => {
          menuList.classList.remove("closing");
          menuButton.classList.remove("closing");
        },
        { onde: true }
      );
    });
  }

  events.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu, { passive: true });
  });
}
