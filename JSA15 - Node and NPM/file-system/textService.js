const fs = require('fs');
const fileName = 'testFile.txt';


let writeInFile = (text) => {
    fs.writeFile(fileName, text, function (param) {
        if (param) {
            console.log('Error!');
            return;
        }
    });
}

let readFromFile = () => {
    let fileContent = console.log(fs.readFileSync(fileName, {encoding: 'utf-8'}).toString());
    console.log(fileContent);
}

let appendInFile = (text) => {
    let content = '\n' + text; 
    fs.appendFile(fileName, content, function(param) { 
        if(param) { 
            console.log('Error');
            return;         
        }
    });
}

module.exports = {
    write: writeInFile,
    read: readFromFile,
    append: appendInFile
}