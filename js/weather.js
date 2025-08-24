"use strict";
import { config } from "./config.js";
const { API_KEY } = config;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      const weatherName = document.querySelector("#weather span:first-child");
      const weatherCity = document.querySelector("#weather span:last-child");
      // 도시, 날씨정보
      weatherName.innerText = `${data.name} / `;
      weatherCity.innerText = `${data.weather[0].description} / ${data.main.temp}도`;
    })
  );
  console.log(url);
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다. 날씨 정보가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
