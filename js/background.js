"use strict";

const body = document.querySelector("body");
const bgArray = [
  "img/bg1.jpg",
  "img/bg2.jpg",
  "img/bg3.jpg",
  "img/bg4.jpg",
  "img/bg5.jpg",
];

function backgroundChange() {
  const bglength = bgArray.length;
  const bgRandom = Math.floor(Math.random() * bglength);
  body.style.background = `url(${bgArray[bgRandom]}) no-repeat center/cover`;
  body.style.height = "100vh";
}
backgroundChange();
