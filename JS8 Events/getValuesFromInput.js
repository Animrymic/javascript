// let inputs = document.getElementsByTagName('input');

// document.querySelector('button')
//     .addEventListener('click', function() { 
//         let loginForm = {};
//         for(let input of inputs) { 
//             loginForm[input.name] = input.value;
//         }
//         console.log(loginForm);
//     });


// document.querySelector('button')
//     .addEventListener('click', function() { 
//         let username = inputs[0].value;
//         let password = inputs[1].value;
//         console.log(username);
//         console.log(password);
//     });
    
let btn = document.getElementById('btn'); 
let paragraph = document.getElementById('para');

btn.addEventListener('click', function() { 
    paragraph.style.color = 'white'; 
    paragraph.style.backgroundColor = 'red';
    paragraph.style.fontSize = '24px';
});
