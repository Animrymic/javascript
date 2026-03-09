

const funcs = require("./functions")


console.log("Hello there from my script file"); 

let a = 10;
let b = 20; 

let person = {
    fullName: "Dragan Trojanovikj", 
    age: 22, 
    jobTitle: "Student"
}

let printPersonInfo = (person) => { 
    console.log(`Full name: ${person.fullName}, age: ${person.age}, Position: ${person.jobTitle}`);
}

console.log(a); 
console.log(b); 

printPersonInfo(person); 


funcs.sayHello("Bob"); 
funcs.sayGoodbye("Bob"); 
funcs.printInConsole("This is something to be printed in console");
