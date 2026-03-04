class Vehicle {
    constructor(id, model, yearOfMake, price) {
        this.id = id;
        this.model = model;
        this.yearOfMake = yearOfMake;
        this.price = price;
    }
    displayInfo() {
        console.log(`${this.id}. ${this.model} | YearOfMake: ${this.yearOfMake}. Price: ${this.price}EUR.`);
    }
}

class WheeledVehicle extends Vehicle {
    constructor(id, model, yearOfMake, price, numberOfWheels, fuelType) {
        super(id, model, yearOfMake, price);

        this.numberOfWheels = numberOfWheels;
        this.fuelType = fuelType;
    }

    drive() {
        switch (this.fuelType) {
            case "Petrol":
                console.log(`This car spends 10l/100km`);
                break;
            case "Diesel":
                console.log(`This car spends 6l/100km`);
                break;
            case "Gas":
                console.log(`This car spends 3l/100km`);
                break;
            default:
                console.log("No info for consumption.");
                break;
        }
    }

}

let ford = new WheeledVehicle(1, "Ford Focus", 2022, 25000, 4, "Petrol");
let toyota = new WheeledVehicle(2, "Toyota Corola", 2018, 18000, 4, "Gas");

console.log(ford);
console.log(toyota);

ford.displayInfo();
toyota.displayInfo();

ford.drive();
toyota.drive();



class MathOperations {
    static PI = 3.141592653589793;

    static sum(a, b) {
        return a + b;
    }

    static diff(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divison(a, b) {
        if (b === 0) {
            console.log("Cannot divide by 0");
        }
        return a / b;
    }

     static areEqual(a, b) { 
        return a === b; 
    }
}


let div = MathOperations.divison(20, 4);
let sum = MathOperations.sum(10, 10); 
let calc = MathOperations.sum(10, 10) / MathOperations.multiply(2, 2); 

console.log(div);
console.log(sum);
console.log(calc);
console.log(MathOperations.areEqual(5, 10));

console.log(MathOperations.PI); 
console.log(Math.PI)

