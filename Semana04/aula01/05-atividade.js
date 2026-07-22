const compras = ["Geladeira", "Cadeira", "Panela", "Microondas"]

compras.forEach((compra)=>{
    console.log("Comprar: " + compra)
})
console.log("A lista de compras tem " + compras.length + " itens.")
console.log("----------------------------------------")
compras.push("Frigobar")
compras.forEach((compra)=>{
    console.log("Comprar: " + compra)
})
console.log("A lista de compras tem " + compras.length + " itens.")
