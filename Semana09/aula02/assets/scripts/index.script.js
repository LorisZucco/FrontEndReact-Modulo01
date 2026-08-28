console.log("Formulários Javascript");
document.getElementById("name").focus();
class User {
  constructor(name, age, studentLevel) {
    this.name = name;
    this.age = age;
    this.studentLevel = studentLevel;
  }
  ageVerify() {
    this.age >= 18
      ? console.log("Maior de idade")
      : console.log("Menor de idade");
  }
}

const form = document.getElementsByTagName("form");

form[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const studentLevel = document.getElementById("studentLevel").value;
  const terms = document.getElementById("terms").checked;
  const politics = document.getElementById("politics").checked;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const userData = document.getElementById("userData");
  const success = document.getElementById("success");

  console.log(gender);
  console.log("Formulário Submetido");
  const user = new User(name, age, studentLevel);

  console.log("Nome Digitado: ", user.name);
  console.log("Idade Digitada: ", user.age);
  console.log("Nível de graduação: ", user.studentLevel);

  success.textContent = "Usuário cadastrado com sucesso!";
  render(user.name, user.age);
  clean();

  setTimeout(() => {
    success.textContent = "";
  }, 4000);

  user.ageVerify();
});
function render(name, age) {
  userData.innerHTML = `
  <hr />
  <p>Nome do usuário: ${name}</p>
  <p>Idade do Usuário: ${age}</p>
  `;
}
function clean() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("studentLevel").value = "";
  document.getElementById("terms").checked = false;
  document.getElementById("politics").checked = false;
  document.querySelector("input[name='gender']").checked = false;
}
