const txtService = require('./textService');


txtService.write('I want this text to be added in my txt file'); 

txtService.append('This is new text added');

console.log('==== This is the file content: ====');
setTimeout(function() {
    txtService.read();    
}, 1000);
txtService.read();