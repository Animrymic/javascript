// // how an object works

// let obj = {
//     name: 'Quay',
//     rooms: 40, 
//     booked: 25,
//     gym: true, 
//     roomTypes: ['twin', 'double', 'suite'],
//     checkAvailability: function() { 
//         return this.rooms - this.booked;
//     }

// };

// console.log(obj);

// // new object/ we use dot notation obj2.name from the 1st object

// let obj2 = new Object(); 
// obj2.name = 'Quay2'; 
// obj2.rooms = 50;
// obj2.booked = 40; 
// obj2.gym = false; 
// obj2.roomTypes = ['single', 'double', 'suite', 'presidential'];
// obj2.checkAvailability = function() { 
//     return this.rooms - this.booked;
// }
// console.log(obj2);

// // get value
// let a = obj.name;
// let aa = obj['name'];

// // set value
// obj.booked = 40;
// obj['booked'] = 40; 

// // calling method
// console.log(obj.checkAvailability())
// console.log(obj['checkAvailability']())

// // exercise 1
// let obj3 =  { 
//     name: 'Dragan',
//     age: 21, 
//     birthYear: 2004, 
//     hobby: ['Gaming', 'Football', 'Coding'],
//     adult: true, 
// };
// console.log(obj3);

// // exercise 2
// let obj4 = new Object();
// obj4.name =  'Stole';
// obj4.adult = true; 
// obj4.age = 25; 
// obj4.birthYear = 2001;
// obj4.hobby = ['drink', 'smoke', 'gamble'];
// console.log(obj4);

// // exercise 3 
// let trainer = {
//   name: 'Stefan',
//   lastName: 'Stefanovski',
//   academy: 'SEDC'
// };

// trainer.age = 30;

// trainer.getFullName = function () {
//   return this.name + " " + this.lastName;
// };

// console.log(trainer.getFullName());


// function Hotel(name, rooms, booked) { 
//     this.name = name;
//     this.rooms = rooms; 
//     this.booked = booked; 
//     this.hasGym = false; 

//     this.checkAvailability = function() { 
//         return this.rooms - this.booked;
//     }
// }

// let holidayInn = new Hotel('HolidayInn', 120, 110);
// let meriot = new Hotel('Meriot', 200, 100)

// console.log(holidayInn);
// console.log(meriot);

// function checkThis() { 
//     console.log(this);
// }

// checkThis();

// let shape = {
//     width: 100, 
//     height: 100, 
//     checkThisInObj: function(){
//         console.log(this);
//     }
// }

// shape.checkThisInObj();

// let width = 600; 
// let shape1 = {
//     width: 400
// };

// function showWidth() {
//     console.log(this.width);
// }

// showWidth();

// shape1.showWidth = showWidth; 
// shape1.showWidth();

let car = {
  brand: "Ford",
  model: "Puma",
  color: "White",
  year: 2021,
  fuelConsumption: 7, 

  
  calculateFuel: function(distance) {
    return (distance * this.fuelConsumption) / 100;
  }
};

let distance = 200; 
let fuelNeeded = car.calculateFuel(distance);

console.log("Fuel needed:", fuelNeeded, "liters");