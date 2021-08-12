 // npm(node package manager(npm) automatically installed with node.js) enables us to do 3 things:-
 //1. reuse our own code in other projects
 //2.use code develop by other developers
 //3.share our soln with other developers also
 //PACKAGE / DEPENDENCIES / MODULES:- npm calls reusable code a package( package is a folder that contains a javaScript code)

 // npm - global command, comes with node
 // npm --version

 // local dependency - use it only in this particular project (most preferably install this local package instead of globally)
 // npm i <packageName>

 // global dependency - use it in any project (we can install package globally with arrival of npx)
 // npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores imp info abt project/package)
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything by default)

// if u dont have node_modules folder then npm creates it and node_modules contains all depedencies(or package)
// big dependencies (eg: bootstrap) can have more dependencies , which will automatically installed with big dependencies.


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
// lodash has flattenDeep method which splits back above array in flat array
const newItems = _.flattenDeep(items)
console.log(newItems);
