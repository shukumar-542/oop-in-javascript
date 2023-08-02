class Person {
    constructor(name, email){
        this._name = name;
        this._email = email
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
    print(){
        console.log(this);
    }
}
const person1 = new Person('shukumar ghosh','shukumar542@gmail.com') 
console.log(person1.name)
person1.name = 'shuku'
person1.print()