function requestLoan(income){
    return new Promise((resolve, reject)=>{
        if (income >= 60000){
            resolve(`Empréstimo aprovado!`)
        }
        else {
            reject(`Empréstimo negado!`)
        }
    },4000)
}
requestLoan(400000)
.then((message)=> console.log(message))
.catch((error)=> console.log(error))

requestLoan(60000)
    .then((message)=> {console.log("Passo1: ", message)
        return {"texto":"Seguindo para análise...",message}  
    })
    .then((next)=> console.log("Passo 2: ",next))
    .catch((error) =>console.log(error))