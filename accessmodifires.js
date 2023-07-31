class Person {
    constructor(name,email){
        this._name = name;
        this._email = email;
    }
    getName(){
        return this._name
    }
    setName(name){
        this._name = name;
    }
    print(){
        console.log(this);
    }
    sendMail(msg){
        console.log('To', this._email);
        console.log('msg', this._sanitizedMsg(msg));

    }
    _sanitizedMsg(msg){
        return msg.trim().toLowerCase()
    }
}
const person1 = new Person('shukumar', 'test@gmail.com');
person1.setName('shukumar ghosh')
person1.print();
person1.sendMail('       HLW     ')