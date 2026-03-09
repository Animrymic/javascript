let sayHello = (personName) => { 
    console.log(`Hello ${personName}! Have a nice day :)`); 
}

let sayGoodbye = (personName) => { 
    console.log(`Goodbye ${personName}! Hope to see you soon!`); 
}

let printInConsole = (text) => { 
    if(!text) { 
        throw new Error("You must some text to be printed"); 
    }
    console.log(text);     
}

module.exports = { 
    sayHello: sayHello, 
    sayGoodbye: sayGoodbye, 
    printInConsole: printInConsole
}

