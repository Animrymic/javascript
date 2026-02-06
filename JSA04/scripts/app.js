// Function in JS
function sayHello() { 
    console.log('Hello from my function');
}
sayHello();

function sumTwoNumbers(num1, num2) { 
    return num1 + num2;
}
sumTwoNumbers(5, 10);



// Anonymous function
let diffTwoNumbers = function(num1, num2) { 
    return num2 - num1;     
}
diffTwoNumbers(10, 20);


let multiply = function (num1, num2) { 
    return num1 * num2;
}
multiply(5, 5); 

let divide = function(num1, num2) { 
    return num1 / num2; 
}
divide(); 


// Arrow functions
let multiplyArrow = (num1, num2) => num1 * num2;
let divideArrow = (num1, num2) => num1 / num2; 
let sumOfThreeArrow = (num1, num2, num3) => num1 + num2 + num3; 
let diffOfThreeArrow = (num1, num2, num3) => num1 - num2 - num3; 

let squareNumberArrow = num => num * num; 

let convertCurrency = (currencyType, currencyValue) => {
    if (currencyType === "EUR") { 
        return currencyValue / 61.5; 
    } 
    if (currencyType === "MKD") { 
        return currencyValue * 61.5; 
    }
}

// (2 * 5) + (2 / 5)

let product = multiply(2, 5); 
let divisionValue = divide(2, 5); 

sumTwoNumbers(product, divisionValue);

sumTwoNumbers(multiplyArrow(2, 5), divideArrow(2, 5));
sumTwoNumbers((2 * 5), (2 / 5));


// Self-invoked or IFFEs functions

(function(num1, num2) {     
    // console.log(num1 + num2); 
})(100, 50);



((num1, num2) => {
    // console.log(num1 + num2); 
})(100, 50)

let array = [1,2,3, (num1, num2) => num1 + num2]; 
// console.log(array[3](22,44));


// Exercises


let countDigits = (n) => {
    return Math.abs(n).toString().length;
}
// console.log(countDigits(1222121)); 

let isEvenOrOdd = (n) => { 
    return n % 2 === 0 ? 'Even' : 'Odd'; 
}
// console.log(isEvenOrOdd(6));

let isPositiveOrNegative = (n) => { 
    return n >= 0 ? 'Positive' : 'Negative'; 
}
// console.log(isPositiveOrNegative(-128));

function AllParameters (n) { 
    return {
        digits: countDigits(n),
        evenOrOdd: isEvenOrOdd(n),
        positiveOrNegative: isPositiveOrNegative(n) 
    }
}
let result = AllParameters(124);
console.log(result);

function sumTo(number) {
    if(number === 0) { 
        return 0; 
    } 
    return number + sumTo(number - 1);
}

console.log(sumTo(20)); 