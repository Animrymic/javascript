let student = { 
    fullName: "Martin Panovski",
    age: 32,
    academy: "Avenga Academy - Web Developer",
    grades: [6, 6, 7, 9, 10, 7, 8, 6, 8] 
}

// With no high order functions

let allGradesAboveSeven = []
let sum = 0;
for (const grade of student.grades) {
    if(grade > 7) { 
        allGradesAboveSeven.push(grade); 
    }   
}

for (const grade of allGradesAboveSeven) {
    sum += grade;    
}
let average = sum / allGradesAboveSeven.length;

// With higher order functions - reduce
let averageGrade = student.grades.filter(grade => grade > 7).reduce((newSum, grade) => newSum += grade, 0) / allGradesAboveSeven.length;

console.log(average);
console.log(averageGrade);

let numbers = [10, 20, 30, 40, 50]; 
let numbersArr = numbers; 

numbersArr.push(60, 70, 80, 90, 100);
console.log(numbersArr);

function copyArray(array) { 
    let copied = []; 
    array.forEach(element => copied.push(element));
    return copied;
}
let myCopiedArr = copyArray(numbers);
myCopiedArr.push(200, 300, 400, 500);
console.log("Copy array" + myCopiedArr);
console.log("Original" + numbers);

numbers.push(3, 4, 5)
console.log(numbers);

// Higher order function - every 
let ages = [18, 20, 22, 32, 28, 29, 23, 33, 50, 60];

let areAllMature =  ages.every(age => age >= 18); 
console.log(areAllMature);

// Higher order funcion - some()
let IsSomeoneUnderage = ages.some(age => age < 18);
console.log(IsSomeoneUnderage);

// Higher order function - find()
let cities = ["Skopje", "Prague", "Barcelona", "Belgrade", "Ljubljana"];

let skopje = cities.find(city => city === "Skopje");
console.log(skopje);

// Higher order function - findIndex()
let barcelonaIndex = cities.findIndex(city => city === "Barcelona"); 
console.log(barcelonaIndex);

// Higher order function - includes()
let isPragueInAnArray = cities.includes("Prague"); 
console.log(isPragueInAnArray);

// Higher order funciton - flat() and flatMap()
let specialArray = [1, 2, 3, [4, 5, [6, 7]]];
let flattened = specialArray.flat(1);
console.log(flattened);

let cityWords = cities.flatMap(word => word.split(''));
console.log(cityWords);

// Higher order function - join()
let joined = cities.join(' - ')
console.log(joined);

// Higher order function - slice(), splice() 
let sliced = cities.slice(1, 3);
console.log(sliced); 

let spliced = cities.splice(0, 2);
console.log(spliced);
console.log(cities);

// Higher order function - reverse()
let reversed = cities.reverse()
console.log(reversed);

// Pure functions
function increadesByOne (numbers) { 
    let result = [];
    for (let i = 0; i < numbers.length; i++) { 
        result.push(numbers[i] + 1)
    }
    return result;
}
console.log(increadesByOne(numbers));

// Impure function - using a variable from the outside scope
let one = 1; 

function increaseByOneImpure (numbers) { 
    let result = []; 
    for (const number of numbers) {
        result.push(number + one);        
    }
    return result;
}
console.log(increaseByOneImpure(numbers));

// Impure funtion 

function increasedByOneImpureFunc(numbers) { 
    for (let i = 0; i < numbers.length; i++) { 
        numbers[i] += 1;
    }
    return numbers;
}
console.log(increasedByOneImpureFunc(numbers));
