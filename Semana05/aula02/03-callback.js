function execute (a, b, operation){
    return operation(a, b)
}

const add = (a, b) => a + b;
const multiply = (a,b) => a * b;
const subt = (a,b) => a - b;
const div = (a,b) => a/b;

console.log(execute(1,2, add))
console.log(execute(1,2, multiply))
console.log(execute(1,2, subt))
console.log(execute(1,2, div))

console.log("-----------------------------------------------------")

function finishAnalysis(name, onDone){
    console.log("Análise concluída")
    
    onDone(name)
}
finishAnalysis("Ana", (name)=>{
    console.log(`${name}, revise suas pendências.`)
})
console.log("---------------------------------------------")

const teste = (name) => {
      console.log(`${name}, revise suas pendências.`)
}