console.log("Local Storage");

const form = document.getElementById("form");
const notesKey = "portaria-recado";

const notesList = [];
let savedNote = localStorage.getItem(notesKey);
if (savedNote == null) {
  localStorage.setItem(notesKey, "Nenhum Dado Salvo!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const note = document.getElementById("note").value;
  //   console.log(note);

  notesList.push(note);

  localStorage.setItem(notesKey, JSON.stringify(notesList));
  savedNote = JSON.parse(localStorage(notesKey));
  console.log("Dado que veio do local storage: ", savedNote);
});

// console.log("Dado que veio do local storage: ", savedNote);

// const items = ["café", "arroz", "leite"];

// localStorage.setItem("mercado-items", JSON.stringify(items));

// const savedItems = JSON.parse(localStorage.getItem("mercado-items"));

// console.log(savedItems);

// const user = [
//   {
//     name: "Loris",
//     idade: 34,
//   },
//   {
//     name: "Felipe",
//     idade: 35,
//   },
// ];

// localStorage.setItem(JSON.stringify("usuarios-lista", users));

// const savedUsers = localStorage.getItem(JSON.parse("usuarios-lista"));

// console.log(savedUsers);

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  localStorage.clear();
});
