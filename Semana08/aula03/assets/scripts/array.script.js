console.log("JS ARRAY!");

const animes = [
  {
    nome: "Naruto",
    ano: 2002,
  },
  {
    nome: "Dragon Ball",
    ano: 1986,
  },
  {
    nome: "One Piece",
    ano: 1999,
  },
  {
    nome: "Atack on Titan",
    ano: 2013,
  },
];

const list = document.getElementById("animes-list");

// setTimeout(() => {
//   list.innerHTML = "<p>Lista carregando...</p>";
// }, 3000);

const list2 = ` 
<ul>
</ul>
`;
animes.forEach((anime) => {
  list.innerHTML =
    list.innerHTML +
    `
    <ul>
        <li>
        ${anime.nome}
        </li>
    </ul>
    `;
});
