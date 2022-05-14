"use strict";

const btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
//   this.style.background = "red"; // this bu yerda e.target ga teng
//   //e.target.style.background = "red"
//   this.style.color = "yellow";
// });

btn.addEventListener("click", (e) => {
  e.target.style.background = "red"; // function siz call back orqali e.target ishlatiladi
});

const calc = (a) => a * 2;
// yoki shunday yozsa buladi const calc = (a) => {
//   return a * 2;
// };
