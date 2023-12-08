export default function toTop() {
  const goTop = document.querySelector(".top");

  function pageTop(event) {
    event.preventDefault();
    const options = {
      left: 0,
      top: 0,
    };
    window.scrollTo(options);
  }

  goTop.addEventListener("click", pageTop);
}
