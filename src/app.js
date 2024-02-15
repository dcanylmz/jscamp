console.log("Merhaba Kodlama.io");

// JS type safe değildir.
let dolarDun = 9.2;
let dolarBugun = 9.3;

console.log(dolarDun);

const euroDun = 30;
console.log(euroDun);

let konutKredileri = [
  "Konut kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

console.log(konutKredileri);
// 02.23.40'dan devam edilecek

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
