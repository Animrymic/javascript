class Student { 
    constructor(id, fName, lName, age, academyName) { 
        this.id = id; 
        this.fName = fName; 
        this.lName = lName; 
        this.age = age; 
        this.academyName = academyName; 
    }

    get age() { 
        this._age > 18 ? 
                console.log("This student is adult!") : 
                console.log("This student is a minor!");
    }

    set age(value) { 
        if(value <= 0) { 
            throw new Error("Cannot assign value below or equal to 0 for property Age")
        }
        this._age = value; 
    }
   
}

let martin = new Student(1, "Martin", "Panovski", 32, "Avenga Academy - Web Dev"); 
console.log(martin.age);
console.log(martin);

let dragan = new Student(2, "Dragan", "Trojanovik", 22, "Avenga Academy - Web Dev");
console.log(dragan.age);
console.log(dragan);

let mario = new Student(3, "Mario", "Simonovski", 34, "Avenga Academy - Web Dev"); 
console.log(mario.age);
console.log(mario);

console.log(martin instanceof Student); 
    