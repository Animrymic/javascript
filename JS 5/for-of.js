// let numbers = [1,2,3,4,5,6,7,8,9,0]; 
// for(let i = 0; i < numbers.length; i+= 1) {
//     let num = numbers[i]; 

//     //code block
// }

// for(let num of numbers) { 
//     console.log(num); 
// }

// let days = ['Monday', 'Friday']; 

// for(let day of days) { 
//     console.log(day);
// }

// for(let index in numbers) { 
//     console.log(index); 
// }

// for(let index in days) { 
//     console.log(days); 
// }

// let obj = {
//     prop1: 'Trajan', 
//     prop2: 'Stevkovski'
// }

// for(let propName in obj) {
//     console.log(propName);
// }

// let workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// for(let day of workingDays) {
//     console.log('Before if', day);
//     if(day == 'Wed') {
//         break;
//     }
//     console.log(day); 
// }

// for (let day of workingDays) { 
//     console.log('It is ' + day);
//     if (day == 'Tue' || day == 'Thu') { 
//         continue
//     }
//     console.log('Doing some big calculations.....')
// }

// Function that counts how many times a number appears in an array

// function findNumber (number, array) {
//   let count = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       count++;
//     }
//   }

//   console.log(
//     "There are " + count + " occurrences of number " + number + " in the array."
//   );
// }

// findNumber(5, [1, 5, 2, 5, 5, 3, 5]);
// findNumber(3, [3, 3, 3, 1, 2]);
// findNumber(7, [1, 2, 3, 4, 5]);\

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function filterOddEven (array, type)

for (let i = 0; i < array.length; i++) { 
    let number = array[i];

    if (type === "even" && number % 2 === 0) {
        result.push(number);
    }
    
    if (type === "odd" && number % 2 !=== 0) { 
        result.push(number); 
    }
}
    return result;

    console.log(filterOddEven(numbers, "even")); // [2, 4, 6, 8]
    console.log(filterOddEven(numbers, "odd"));  // [1, 3, 5, 7]




