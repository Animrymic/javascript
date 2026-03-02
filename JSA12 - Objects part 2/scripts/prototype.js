function Animal(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;

    this.printInfo = function () {
        console.log(`I am ${this.name} the animal! Age: ${this.age} Color: ${this.color}`);
    }
}

function EarthAnimal(name, color, age, numOfLegs) {
    Object.setPrototypeOf(this, new Animal(name, color, age))
    this.numOfLegs = numOfLegs;
    this.walk = function () {
        console.log(`I am earch animal with ${this.numOfLegs} legs!`);
    }
}

let dog = new EarthAnimal("Sharko", "Black", 4, 4)
dog.printInfo();
dog.walk(); 

// Making WaterAnimal

function WaterAnimal(name, color, age, hasLegs, size) { 
    Object.setPrototypeOf(this, new Animal(name, color, age))

    this.hasLegs = hasLegs; 
    this.size = size; 

    this.swim = function() {
        console.log(`I am a ${this.size} water animal and I ${this.hasLegs ? "have" : "do not have"} legs!`);
    }
} 

let fish = new WaterAnimal("Nemo", "Orange", 2, false, "small"); 
fish.printInfo(); 
fish.swim(); 

let crocodile = new WaterAnimal("Kroko", "Green", 5, true, "large"); 
crocodile.printInfo(); 
crocodile.swim(); 

