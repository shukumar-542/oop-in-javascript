class Person {
    constructor(name, email){
        this._name = name;
        this._email = email
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value.toUpperCase()
    }
    get email (){
        return this._email
    }
    set email (value){
        this._email = value
    }
    print(){
        console.log(this);
    }
}
const person1 = new Person('shukumar ghosh','shukumar542@gmail.com') 

module.exports = Person