console.log("Eventos");

const addButton = document.getElementById("add");
const decreaseButton = document.getElementById("decrease");
let textNumber = document.getElementById("number");
let number = 0;
addButton.addEventListener("click", addNumber);
function addNumber() {
  console.log(number++);
  textNumber.textContent = number;
}

decreaseButton.addEventListener("click", () => {
  console.log(--number);
  textNumber.textContent = number;
});
