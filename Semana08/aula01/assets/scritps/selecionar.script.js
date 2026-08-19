console.log("Selecionar");

const event = document.querySelector("#events-list");
const events = document.querySelectorAll(".event");
const titleh2 = document.querySelector("h2");

titleh2.textContent = titleh2.textContent + "⚠️";

console.log(events);

events.forEach((element) => {
  console.log(element.textContent);
});

let counter = 1;

events.forEach((item) => {
  item.textContent = `${counter} - ${item.textContent}`;
  counter++;
});
