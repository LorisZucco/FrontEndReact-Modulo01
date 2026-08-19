console.log("Alterar Conteúdo");

const alteredText = "Este é o novo texto!";

const emptyBox = document.getElementById("box");
const tagp = document.getElementById("alter-text");
setTimeout(() => {
  tagp.textContent = alteredText;
}, 3000);
const littleText = "innerHTML no JS --";
let i = 1;

// emptyBox.innerHTML = `<p id="altertext"> Este é o texto gerado pelo ${littleText}.</p>
// <ul>
// `;
// while (i <= 5) {
//   `
//     <li>Item ${i}</li>
//     `;
//   i++;
// }
// `
// </ul>
// `;
