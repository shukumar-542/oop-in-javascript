class Person {
    constructor(name,email){
        this.name =  name
        this.email =  email
    }
    changeName(name) {
        this.name = name    
    }
    sendEmail(msg){
        console.log('from ',this.email,'sending email', msg );
    }

    print(){
        console.log(this);
    }

}
const person1 =  new Person('raj', 'raj@gmail.com')
const person2 =  new Person('shukumar', 'shukumar@gmail.com')
console.log(person1);
person1.changeName('rajKumar')
person1.sendEmail('hello')
console.log(person1);
person2.print()