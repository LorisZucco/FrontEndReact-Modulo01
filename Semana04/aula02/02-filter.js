const numbers = [10, 3, 8, 1, 6]

const biggers =  numbers.filter((n)=>{
    return n >= 6
}) 
console.log(numbers);
console.log(biggers);

const names = ["Ana", "Bruno", "Carlos", "Lucas"];
const moreThen5 = names.filter((name)=>{
    return name == "Ana"
})
console.log(moreThen5)