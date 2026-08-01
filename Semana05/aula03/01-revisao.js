class Task {
  constructor(title, done) {
    this.title = title;
    this.done = done;
  }
  describe() {
    return console.log(`${this.title} - ${this.done ? "Feito" : "Pendente"}`);
  }
}

function loadFromServer() {
  const data = [
    { title: "Estudar", done: false },
    { title: "Fazer o Mini-Projeto", done: false },
    { title: "Revisar o conteúdo", done: false },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(data);
    }, 3000);
  });
}

async function start() {
  console.log("Buscando os dados do servidor");

  const rawData = await loadFromServer();
  const tasks = rawData.map((item) => new Task(item.title, item.done));
  tasks.forEach((element) => {
    console.log(element.describe());
  });
}
start();
