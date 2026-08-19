console.log("Hello World!");
let title = document.getElementById("title").textContent;
console.log(title.textContent);

title.textContent = "Novo Título - 2 ";

console.log(title.textContent);

setTimeout(() => {
  document.getElementById("title").textContent = "Novo título -  3 ";
}, 4000);
