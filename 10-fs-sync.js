// fs module - use to interact with the file System

const {readFileSync, writeFileSync} = require('fs')

//console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second);

// if u want to create a new file or simply override it
writeFileSync('./content/result-sync.txt',`Result is ${first} ${second}`,{flag:'a'})

//console.log('done with the task');
//console.log('starting a new task');

// these above console logs which are commented are used for showing that ,if 10 users r using this same app ,then node is not able to serve other users
// blc when 1st user is done then only second will use(time consuming)
