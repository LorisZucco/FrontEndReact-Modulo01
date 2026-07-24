const precos = [30, 60, 90 ,120, 20];
const precosComDesconto = precos.map ((preco) =>{
    if (preco <= 60){
        return preco*0.9;
    }
    return preco;
    
})
console.log(precosComDesconto)