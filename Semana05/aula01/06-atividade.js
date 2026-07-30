class Vehicle {
    constructor (name){
        this.name = name;
    }
    move(){
        console.log(`${this.name} andou pra frente!`)
    }
}

class Car extends Vehicle {
    constructor (name){
        super(name)
    }
    move(){
        console.log(`${this.name} andou pro lado!`)
    }
}

class Bicicleta extends Vehicle {
    constructor (name){
        super(name)
    }
    move(){
        console.log(`${this.name} andou pra trás!`)
    }
}

const vehicles =[
    new Vehicle("Avião"),
    new Bicicleta("Monark"),
    new Car("Corsa ")
]

vehicles.forEach((user) =>{
    user.move()
    }
)