//! Header Fixed and Scroll Up

const headerFixed = () => {
  const header = document.querySelector("header");
  this.scrollY >= 100
    ? header.classList.add("active")
    : header.classList.remove("active");

  const scroll = document.querySelector(".scrollUp");
  this.scrollY >= 500
    ? (scroll.style.display = "block")
    : (scroll.style.display = "none");
};

window.addEventListener("scroll", headerFixed);

//! Burger Menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".hamburger div");
const lang = document.querySelector(".lang");
const bulb = document.querySelector(".bulb");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("slide");
  lines.forEach((item) => {
    item.classList.toggle("toggle");
  });
});

//! Change Language

lang.addEventListener("click", () => {
  lang.classList.toggle("active");
});

//! Digital World Animation

const texts = document.querySelectorAll(".btnImage div");
texts.forEach((text) => text.classList.add("active"));

setInterval(() => {
  bulb.classList.toggle("active");
  bulb.classList.contains("active") === true
    ? bulb.setAttribute("src", "./assets/img/digitalWorld/on.png")
    : bulb.setAttribute("src", "./assets/img/digitalWorld/off.png");
}, 5000);

//! Who Are We

new CircleType(document.querySelector(".about")).radius(150);
new CircleType(document.querySelector(".services")).radius(150);
new CircleType(document.querySelector(".portfolio")).radius(130);
new CircleType(document.querySelector(".ourTeam")).radius(150);
new CircleType(document.querySelector(".contact")).radius(90);

//! Form
const title = document.querySelector(".title");

const titleText = "Let’s discuss your design challenges";
const titleElements = titleText.split("").map((item, index) => {
  title.innerHTML += `<span
  class='fallingChar'
  style='animation-delay: ${index * 0.2}s'
>
  ${item}
</span>`;
});

const thank = document.querySelector(".thank");

const thankText = "Thank you!";
const thankElements = thankText.split("").map((item, index) => {
  thank.innerHTML += `<span
  class='fallingChar'
  style='animation-delay: ${index * 0.2}s'
>
  ${item}
</span>`;
});

$(document).ready(function () {
  $("select").niceSelect();
});

const openForm = document.querySelectorAll(".openForm");
openForm.forEach((btn) =>
  btn.addEventListener("click", () => {
    form.style.display = "flex";
    document.body.style.overflow = "hidden";
  })
);

const sendForm = document.querySelector(".sendForm");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

sendForm.addEventListener("click", () => {
  form.classList.add("active");
});

close.addEventListener("click", () => {
  form.classList.remove("active");
  form.style.display = "none";
  document.body.style.overflow = "auto";
});

//! Dark Mode

const theme = document.querySelector(".theme");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const header = document.querySelector("header");
const logoLight = document.querySelectorAll(".logoLight");
const logoDark = document.querySelectorAll(".logoDark");
const langArrow = document.querySelector(".langArrow");
const btnBg = document.querySelector("#btnBg");
const digitalWorld = document.querySelector("#digitalWorld");
const changeDarkMode = document.querySelectorAll(".changeDarkMode");
const digitalWorldBottom = document.querySelector(".digitalWorldBottom");
const titles = document.querySelectorAll(".titles");

dark.addEventListener("click", () => {
  theme.classList.toggle("darkMode");
  header.classList.toggle("darkMode");
  digitalWorld.classList.toggle("darkMode");

  digitalWorldBottom.style.backgroundColor = "rgba(241, 89, 88, 1)";

  logoLight.forEach((item) => (item.style.display = "none"));
  logoDark.forEach((item) => (item.style.display = "block"));

  langArrow.classList.add("active");

  btnBg.style.background =
    "linear-gradient(180deg, #F15958 0%, #4663A9 99.99%, rgba(9, 117, 20, 0.00) 100%)";

  changeDarkMode.forEach((item) => (item.style.backgroundColor = "#092567"));
  titles.forEach((item) => (item.style.color = "#fff"));
});

light.addEventListener("click", () => {
  theme.classList.toggle("darkMode");
  header.classList.toggle("darkMode");
  digitalWorld.classList.toggle("darkMode");

  digitalWorldBottom.style.backgroundColor = "rgba(68, 99, 171, 0.20)";

  logoLight.forEach((item) => (item.style.display = "block"));
  logoDark.forEach((item) => (item.style.display = "none"));

  langArrow.classList.remove("active");

  btnBg.style.background = "#F15958";

  changeDarkMode.forEach((item) => (item.style.backgroundColor = "#fff"));
  titles.forEach((item) => (item.style.color = "#000"));
});

//! Menu-Active

var btns = document.querySelectorAll(".menu-junior");

btns.forEach(function (item) {
  item.addEventListener("click", function () {
    btns.forEach(function (item) {
      item.classList.remove("menu-active");
    });

    item.classList.add("menu-active");
  });
});
