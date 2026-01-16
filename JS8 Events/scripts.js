// HTML Event handlers

// function greet() { 
//     alert('Hello world!');
// }

// function countRabbits () { 
//     for(let i = 0; i <3; i++)
//         console.log(`Rabit No.${i+1}`);
// }

// Traditional DOM handlers

// let btn = document.getElementById('btn');
// btn.onclick = function() {
//      alert('Hello DOM!');
// }

// function sayHello() { 
//     alert('Say hello!');
// }
// btn.onmouseover = sayHello;


// function three()  {
//     return 3;
// }

// let four = three;

// let five = three();
// console.log(four); 
// console.log(five); 

// EVENT LISTENER

// let btn1 = document.getElementById('btn1'); 
//     btn1.addEventListener('click', function() { 
//             alert('Calling from event listener');
//     });

// let input = document.getElementById('input1'); 

// let result = document.getElementById('result'); 

// let history = []; 

// input.addEventListener('keypress', function(event) { 
//     // console.log('Hello');
//     // console.log(event);
//     let value = event.target.value;
//     result.innerText = value;

//     if (event.keyCode === 13) { 
//         history.push(value); 
//         console.log(history);
//     }
// });

// let btn3 = document.getElementById('btn3'); 

// btn3.addEventListener('click', function () {
//     alert('Hello Dragan');
// });

// let btn4 = document.getElementById('btn4'); 

// function removeEvListener() { 
//     console.log('clicked');
//     btn4.removeEventListener('click', removeEvListener);
// }

// btn4.addEventListener('click', removeEvListener); 


// WE CAN NOT DO REMOVE EVENT LISTENER LIKE THIS

// btn4.addEventListener('click', function() {
//     console.log('clicked');
//     btn4.removeEventListener('click', function(){});
// });

function a () { 
    function b() { 
        function c() { 
            function d() { 

            }
            d();
        }
        c();
    }
    b(); 
}
a();