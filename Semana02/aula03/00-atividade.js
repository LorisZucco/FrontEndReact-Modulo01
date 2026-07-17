// Montanha Russa com critérios de altura
const prompt = require("prompt-sync")()

let alturaTexto = prompt("Qual sua altura? ")
let alturaConvertida = Number(alturaTexto)

//console.log (typeof(alturaTexto))
//console.log (typeof(alturaConvertida))



if (alturaConvertida >= 140 ) {console.log ("Você pode entrar!")

} 
else if (alturaConvertida <140 && alturaConvertida >= 120) {console.log("Você pode entra acompanhado")}
else {console.log ("Você nao pode entrar!")}


