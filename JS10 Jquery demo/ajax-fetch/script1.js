let obj = { 
    name: 'trajan',
    lastName: 'stevskovski',
    age:38, 
    courses: [
        'html',
        'js basic',
        'js advanced',
    ],
    address: {
        street: 'some address',
        number: 10
    },
    getaddress: function() { 
        return this.address;
    }
}

let jsonObj = JSON.stringify(obj);
console.log(jsonObj);
let toJson = JSON.parse(jsonObj); 

console.log(toJson); 
console.log(toJson.name)