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
const header = document.querySelector("header");
const digitalWorld = document.querySelector("#digitalWorld");
const changeMode = document.querySelectorAll(".changeMode");

theme.addEventListener('click', () => {
  header.classList.toggle("darkMode");
  digitalWorld.classList.toggle("darkMode");
  changeMode.forEach( item => item.classList.toggle("darkMode") );
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