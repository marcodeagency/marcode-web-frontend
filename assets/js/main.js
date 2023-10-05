const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("slide");
  lines.forEach((item) => {
    item.classList.toggle("toggle");
  });
});
