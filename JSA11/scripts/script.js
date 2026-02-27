function Product(name, category, quantity, price) { 
    this.name = name; 
    this.category = category;
    this.quantity = quantity; 
    this.price = price;
    this.Instock = quantity > 0; 
    
    this.updateStock = function(amount) { 
        if (amount > this.quantity) { 
            // throw error
            console.log('Not enough products');
            return;
        }

        this.quantity = this.quantity - amount; 
        this.Instock = this.quantity > 0; 
    }
}

// let product = new Product('Laptop', 'Laptop', 10, 200); 
// console.log(product.Instock);

// product.updateStock(10);
// console.log(product.Instock);






// let person3 = { 
//     name: 'Bob',
//     greet: function() { 
//         const arrow = () => { 
//             console.log(this);
//         };
//         arrow();
//     }
// };
// person3.greet();



function Car() { 
    console.log(this); 
    this.name = 'Toyota'; 

    this.drive = function() { 
        console.log(this);
    }

    this.start = () => console.log(this);
}
// Car

let car = new Car();
car.drive(); 
car.start(); 