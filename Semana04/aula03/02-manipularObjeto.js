const car = {
    "brand": "Fiat",
    "year": 2019,
}
console.log(car)

car.color = "prata"

console.log(car)

car.year = 2021

console.log(car)

delete car.brand 

console.log(car)

console.log(Object.keys(car))

console.log(Object.values(car))