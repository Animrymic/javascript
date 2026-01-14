// alert("Hello G1 welcome to javascript!"); 


// logiraj vo konzola toa shto e vo zagrade
// console.log("Hello G1 welcome to javascript!")

// deklaracija na promenliva- let, 
let number;
//inicijaliranje na promenliva - number = 5; - sekogash edno ednakvo, znachi inicijalizacija, dve ednakvi e sporedba
number = 5;

let number1 = 5; // i deklaracija i inicijalizacija

// let myNameIsTrajan; using camelcase - variables are case sensitive 
// let _test;

// let Number2;  //not the same
// let number2;  //not the same

// {
//     let a = 1; //local variable
// }

// string
let str = "This is a string";
let str2 = "This is a string also";
let str3 = "232131";

// numbers
let num = 1;
let num1 = 1312312342;
let num2 = -12321; 

//boolean
let isValid = true; 
let isValid1 = false; 

//undefined
let variable; 
let variable1 = undefined;
console.log(variable);
console.log(variable1);

//null
let students = null;
console.log(students);

let a = "Trajan";
let typeOfVariable = typeof a; 
console.log(typeOfVariable);

a = 10; 
console.log(typeof a); 

//this is a comment - single line comment

/* multiline comment

let students = null;
console.log(students);

let a = "Trajan";
let typeOfVariable = typeof a; 
console.log(typeOfVariable);
*/

// mathematical 
let b = 21; 
let c = 5; 
let sum = b + c; 
console.log(sum); 

let substract = c - b;
console.log(substract);

let multiply = b * c; 
console.log(multiply);

let divide = b / c; 
console.log(divide);

let modulus = b % c; 
console.log(modulus);

b++; 
console.log(b);
b = b + 1; 
console.log(b);
b += 1; 
console.log(b);

b--; 
console.log(b);
b = b - 1; 
console.log(b);
b -= 1; 
console.log(b);

//comparison operators
let first = 10; 
let second = 20;  
console.log(first < second);
console.log(first <= second);

console.log(first > second); 
console.log(second >= first);

let name = 'trajan'; 
let name1 = "dragan"; 
console.log(name != name1);
console.log(name == name1);

console.log(name == first);

// let feet = 47; 
// let meters = feet * 0.3048;     
// console.log(feet + " feet = " + meters + " meters");

//meters to feet program
let metersPerFeet = 0.3048; 
let feet = 100; 
let meters = feet * metersPerFeet; 
console.log(meters);

// let abc = prompt("Enter number:")
// console.log(typeof abc);

//rectangle area program
let side = 14; 
let side1 = 12; 
let area = side * side1; 
console.log("Area of rectangle:", area);

// radius/circle area program 
let r = 5; 
let area1 = Math.PI * r * r;
console.log("Area of circle =", area1);

let area2 = Math.PI * Math.pow (r, 2); 
console.log("Area of the circle: ", area2);


let phone = 119.95; 
let rate = 5; 
let sumOfPhone = phone * rate; 
let result = sumOfPhone * 30; 
console.log(result);




