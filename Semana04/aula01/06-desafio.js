const chamada = ["","Loris", "Felipe", "Priscila","Lucas", "Henrique"];

chamada.forEach((nome, indice) => {
    console.log( indice + ". " + nome + " Presente")
    if(indice == 0){
        console.log(" ")
    }
    if (nome === "Henrique"){
        console.log( indice + ". " + nome + " Ausente")
    }
})

