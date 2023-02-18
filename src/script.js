const bars = document.querySelector(".bars");
const xmark = document.querySelector(".xmark");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

window.addEventListener("resize", () => {
  const navWidth = body.getBoundingClientRect().width;
  if (navWidth > 1000) {
    sidebar.classList.remove("flex");
    sidebar.classList.add("hidden");
  }
});

bars.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  sidebar.classList.add("flex");
});

xmark.addEventListener("click", () => {
  sidebar.classList.remove("flex");
  sidebar.classList.add("hidden");
});
