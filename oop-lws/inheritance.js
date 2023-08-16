class Players {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getPlayerDetails(){
        return `${this.name} and age is ${this.age}`
    }
}

class Cricketer extends Players { 
    #century
    constructor(name,age,century){
        super(name,age)
        this.#century = century
    }
    getCricketer(){
        return `${this.name} and age ${this.age} and century ${this.#century}`
    }
}

const shakib = new Cricketer('shakib',35,15);
console.log(shakib.getPlayerDetails());
console.log(shakib.getCricketer());