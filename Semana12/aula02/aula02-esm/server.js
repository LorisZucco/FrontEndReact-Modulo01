import users, { ageVerify } from "./users-data.js";
import hello from "./greetings.js";
import { chalkLog } from "./log.js";
// import fetchList from "./fetch-list.js";
import PromptSync from "prompt-sync";
// import { ageVerify } from "./users-data.js";

// console.log(users);
// hello();
// ageVerify(18);

// chalkLog();
// fetchList();

let userName = "";
const prompt = PromptSync();

console.log("Digite o seu nome amigao: ");
userName = prompt("> ");

hello(userName);
