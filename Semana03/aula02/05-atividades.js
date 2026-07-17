function calculaMedia(a, b){
    return ((a+b)/2)
}
console.log("a média é " + calculaMedia(6, 8))

const calculoMedia = (a, b) => ((a + b)/2);

const resultado = calculoMedia(6, 8);
console.log(resultado);

//function precoComDesconto(preco, porcentagem){
    //return desconto = ((preco*100)/porcentagem);

//}
//console.log()
function precoComDesconto(preco, desconto) {
    const valorComDesconto = preco - (preco*desconto)/100;
    return valorComDesconto;  
}
console.log(precoComDesconto(100, 10));

const precoComdescontoArrrow = (preco, desconto) => preco - (preco*desconto) / 100;
console.log(precoComdescontoArrrow(100, 20))

function maiorDeDois(a, b) {
    if (a > b) {
       return ("O primeiro numero é maior")
    } 
    else if (a == b){
        return ("Os numeros são iguais.")
    }
    else{
        return ("O segundo número é maior. ")
        }
    
}
console.log("minha funcao", maiorDeDois(6,8))