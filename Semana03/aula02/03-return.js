function dobro(numero){
    return numero*2;
    //console.log("Calculou!")// não é executado por estar abaixo do return!!!
}
console.log(dobro(20));
const resultado = dobro(30);
console.log(resultado);

// É maior de idade ou não
//function verificaMaiorIdade(idade){
//    if(idade >= 18){
//        return true
//    }
//    else {
//        return false
//    }
//    
//}
//console.log(verificaMaiorIdade(16));
//console.log(verificaMaiorIdade(18));
function verificaMaiorIdade(idade) {
return idade >=18;
}
console.log(verificaMaiorIdade(16));
console.log(verificaMaiorIdade(26));