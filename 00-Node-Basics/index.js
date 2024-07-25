const s1 = require('./student');

// console.log(s1.getName());
// console.log(s1.getAge());
// console.log(s1.cGpa)



// if i want Only name access 
const {getName} = require('./student')
console.log(getName());



const { department } = require('./student');
console.log(department());
