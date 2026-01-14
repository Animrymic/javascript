let firstDiv = document.getElementById("first");


let paragraphs = document.querySelectorAll("p");


let lastDiv = document.querySelector("div:last-of-type");


let  h3InLastDiv = lastDiv.querySelector("h3");


let h1InLastDiv = lastDiv.querySelector("h1");


let secondDiv = document.querySelector(".anotherDiv");
let firstPInSecondDiv = secondDiv.querySelector("p");
let textFromFirstPInSecondDiv = firstPInSecondDiv.textContent;
console.log(textFromFirstPInSecondDiv);

let textElement = secondDiv.querySelector("text");
textElement.textContent += " text";

h1InLastDiv.textContent = 'New text'
h3InLastDiv.textContent = 'Another new text'