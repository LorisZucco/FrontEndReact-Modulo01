// Receber dados do usuário pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome? ")
let idade = prompt("Qual a sua idade?")

//console.log(nome)
//console.log(idade)

// Olá, Felipe! Ano que vem você fará 34 anos!

console.log("Olá, "+(nome)+"! Ano que vem você fará " + (++idade) + " anos!")