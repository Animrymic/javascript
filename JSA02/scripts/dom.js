
// //Random color page
// let pageBody = document.querySelector('body');

//         function getRandomColor() { 
//             return Math.floor(Math.random() * 256); 
//         }
//         let r = getRandomColor();
//         let g = getRandomColor();
//         let b = getRandomColor();
//         pageBody.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


//Title Generator
let textInput = document.getElementById('textInput');
let colorInput = document.getElementById('colorInput');
let fontSizeInput = document.getElementById('fontSizeInput');
let generateBtn = document.getElementById('generateBtn');
let titlesContainer = document.getElementById('titlesContainer');

 generateBtn.addEventListener('click', function() {

    let text = textInput.value;
    let color = colorInput.value;
    let fontSize = fontSizeInput.value;

        if (text === "") {
            alert("Please enter some text!");
            return;
        }

        titlesContainer.innerHTML = "";

    let newTitle = document.createElement('h1');
            newTitle.textContent = text;
            newTitle.style.color = color || "black"; 
            newTitle.style.fontSize = fontSize ? fontSize + "px" : "32px"; 

                titlesContainer.appendChild(newTitle);

                    textInput.value = "";
                    colorInput.value = "";
                    fontSizeInput.value = "";
    });