//? Burger Menu

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

lang.addEventListener('click', () => {
  lang.classList.toggle("active");
});

//* Digital World Animation

const texts = document.querySelectorAll('.btnImage div');
texts.forEach( text => text.classList.add('active') );

setInterval( () => {
  bulb.classList.toggle("active");
  bulb.classList.contains("active") === true ? bulb.setAttribute('src','./assets/img/digitalWorld/on.png') : bulb.setAttribute('src','./assets/img/digitalWorld/off.png');
}, 5000);
