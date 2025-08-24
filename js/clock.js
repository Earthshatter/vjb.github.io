"use strict";
//// 시간 표시

//요소 초기화
const getDate = document.getElementsByClassName("nowDate")[0];

function nowGetDate() {
  // 시간 표시합니다.
  const now = new Date();
  // 시,분,초를 가져옵니다.
  const nowYear = now.getFullYear();
  const nowMonth = String(now.getMonth() + 1).padStart(2, "0");
  const nowDate = String(now.getDate()).padStart(2, "0");
  const nowDay = now.getDay();
  const nowHours = String(now.getHours()).padStart(2, "0");
  const nowMinutes = String(now.getMinutes()).padStart(2, "0");
  //const nowSeconds = String(now.getSeconds()).padStart(2, "0")
  const dateSpan = document.createElement("span");
  const timeSpan = document.createElement("span");
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[nowDay];

  while (getDate.firstChild) {
    getDate.removeChild(getDate.firstChild);
  }

  getDate.appendChild(dateSpan);
  dateSpan.innerText = `${nowYear}-${nowMonth}-${nowDate}(${dayOfWeek})`;
  getDate.appendChild(timeSpan);
  timeSpan.innerText = `${nowHours}:${nowMinutes}`;
}

nowGetDate();
setInterval(nowGetDate, 10000);
