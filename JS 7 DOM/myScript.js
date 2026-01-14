// console.log(document);

//selecting by ID
let MyHeader = document.getElementById('myTitle');
    // console.log(MyHeader);
    // console.log(MyHeader.innerText);

// selecting by class
let paragraphs = document.getElementsByClassName ('myParagraph');
    // console.log(paragraphs);

let secondParagraph = document.getElementsByClassName('second');
    // console.log(secondParagraph);

//selecting by tag name

let paragraphs1 = document.getElementsByTagName('p');
    // console.log(paragraphs1);

let texts = document.getElementsByTagName('text');
    // console.log(texts);

//selecting by query

let paragraphs2 = document.querySelectorAll ('p');
    // console.log(paragraphs2);

let firstParagraph = document.querySelector ('.myParagraph');
    // console.log(firstParagraph);

//query selectors

let main = document.querySelector ('#main'); 
    // console.log(main);

//finding sibling elements

let pTag = document.querySelector('.myParagraph');
let pTaag = document.getElementsByClassName('myParagraph') [0]; //THE SAME AS THE ABOVE ONE

let sibling = pTag.nextElementSibling;
    // console.log(sibling);

let prevSibling = pTag.previousElementSibling; 
    // console.log(prevSibling);

// Finding parent element

let pTag1 = document.querySelector('.myParagraph');
let parent = pTag1.parentElement;
    // console.log(parent);

// Finding child elements

let mainDiv = document.querySelector('#main');
let children = mainDiv.children;
    // console.log(children);

let fChild = mainDiv.firstElementChild; 
let lChild = mainDiv.lastElementChild;
// console.log(fChild);
// console.log(lChild); 


let pTagMyParagraph = mainDiv
                .firstElementChild
                .nextElementSibling  // We can make chain.
                .parentElement
                .firstElementChild;
    // console.log(pTagMyParagraph);

 // Selecting thruogh a selected element

 let a = mainDiv.querySelector('p');
    // console.log(a);

