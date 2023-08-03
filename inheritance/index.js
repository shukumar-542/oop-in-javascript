const Person = require('./person')
const Student = require('./Student')
const Teacher = require('./teacher')

const p = new Person('shukumar', 'shukumar@gmail.com')
const s = new Student(['com','phy'],40000)
const t = new Teacher('xx','x@gmail.com','computer Fundamental', 4000)

t.name = 'shukumar'
console.log(t.name);