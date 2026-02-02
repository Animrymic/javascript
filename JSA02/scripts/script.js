// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
let array = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0) {
    array.push(i);
  }
}

console.log(array);


// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
let evenNumberArray = []; 

for (let i = 1; i <= 1000; i++) { 
    if ( i % 2 === 0 && i % 4 === 0) { 
        evenNumberArray.push(i);
    }
}

console.log(evenNumberArray);


//Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
let thirdArray = []; 

for (let i = 1; i <= 1000; i++) { 
    if(i % 10 === 1) { 
        thirdArray.push(i);
    }
}

console.log(thirdArray);

// Array exercises
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];



//Create a function that cleans an array of any values and leaves only STRINGS
function LeaveOnlyString(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push(arr[i]);
    }
  }

  return result;
}
let stringsOnly = LeaveOnlyString(test);
console.log(stringsOnly);



// Create a function that cleans an array of any values and leaves only NUMBERS
function LeaveOnlyNumbers (arr) { 
    let numberResult = []; 

for (let i = 0; i < arr.length; i++) { 
    if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) { 
        numberResult.push(arr[i]); 
    }
}
    return numberResult; 
}
let numbersOnly = LeaveOnlyNumbers(test); 
console.log(numbersOnly);



// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
function ClearOtherValues(arr) { 
      let cleanArrayResult = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value !== undefined && value !== null && value !== "" && !Number.isNaN(value)) {
      cleanArrayResult.push(value);
    }
  }
    return cleanArrayResult; 
}
let clearAllOtherValues = ClearOtherValues(test); 
console.log(clearAllOtherValues);

