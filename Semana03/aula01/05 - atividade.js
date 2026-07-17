{
    for (let i = 5; i>=1; i--) {
    console.log("Contando " + i);
}
console.log("Já!")
}

{
 let soma = 0;
 let numero = 1;

while (numero <= 10) {
    soma += numero;
    numero++;
}

console.log("A soma total é:", soma);
}

// resolução do professor.
//contagem regressiva
{
    for (let i = 5; i > 0; i--) {
    console.log("Contando " + i);
}
console.log("Já!")
}

// exemplo da soma 1+2+3+5+6+7+8+9+10 = 55 -- usando while
let = resultado = 0;
let = numero = 1;

while (numero <=10) {
    resultado = resultado + numero; // resultado += numero (da na mesma)
    console.log("Resultado parcial: ", resultado);
    numero++
}
console.log("Resultado final: ", resultado);

{
    let cofrinho = 0; // Mostrar o saldo que vou guardando semanalmlente
    const deposito = 15; // valor fixo de R$ 15
    let semanas = 0; // Contador de semanas até bater a meta


    while (cofrinho < 101) {
        cofrinho = cofrinho+deposito;
        semanas++
        console.log("O saldo da semana é: "+ cofrinho + ". A semana atual é: " +semanas)        
    }
    console.log("Partiu balneário, demorei " + semanas + " semanas!");

}