// PATH module - allows us to interact with file path easily

const path = require('path') 
console.log(path.sep); // path seperator

// join the path of file
const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath);

// if we want base name - means only test.txt 
const base = path.basename(filepath)
console.log(base);

// want to return absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);