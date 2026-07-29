class User {
    constructor(name){
        this.name = name
    }

    showRole(){
        console.log(`${this.name} é usuário do sistema`)
    }
}

class Admin extends User {
    showRole(){
         console.log(`${this.name} é admin do sistema`)
    }
}

class Teacher extends User {
    showRole() {
        console.log(`${this.name} é professor`)
    }
}

const users = [
    new Admin ("José"),
    new Teacher ("João"),
    new User ("Fernando")
]

users.forEach((user) =>{
    user.showRole()
    }
)