
//1. Arrays and loops
let randomArray = [1, 2, 3, 'Martin', 'Ivan', undefined, true, false, null, 10.5, NaN];

console.log(randomArray); 

let names = ['Martin', 'Mario','Klementina', 'Marko', 'Ivana']; 
let numbers = [1, 2, 3, 4];

let counter = 0; 

while(counter < names.length) { 
    console.log(names[counter]); 
    counter++; 
}

for (let i = 0; i < numbers.length; i++) { 
    console.log(numbers[i]); 
}

// Functions 
function printNames() {
    console.log('Printing names:');  
    for (let i = 0; i < names.length; i++) { 
        console.log(names[i]); 
    }
}
printNames();

function printItems(array, useForLoop) {
    if(useForLoop) { 
        
    } 
    console.log('Printing any items: ') ;
for (let i = 0; i < array.length; i++) { 
    console.log(array[i]); 
    }
}
printItems(names);
printItems(numbers);
printItems(randomArray); 

function greetPerson(personName) { 
    console.log(`Hello there ${personName}`); 
}
greetPerson('Martin');
greetPerson('Mario');
greetPerson('Edon');
greetPerson('Damjan');