export default function toTop() {
  const goTop = document.querySelector(".top");
  const header = document.querySelector(".introducao-bg");

  function pageTop(event) {
    event.preventDefault();
    const options = {
      left: 0,
      top: 0,
    };
    window.scrollTo(options);
  }

  function showBtnTop(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      goTop.classList.add("hideBtn");
    }

    if (entry.isIntersecting === false) {
      goTop.classList.remove("hideBtn");
      goTop.style.display = "flex";
    }
  }
  const observer = new IntersectionObserver(showBtnTop, {
    root: null,
    threshold: 0,
    rootMargin: "-400px",
  });

  observer.observe(header);

  goTop.addEventListener("click", pageTop);
}
