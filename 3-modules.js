// CommonJS, every file is module (by default)
 // Modules - Encapsulated Code (only share minimum)

 const name = require('./4-firstModule')

 console.log(name.john);

 const sayHi = require('./5-secondModule')
 
 const data = require('./6-alternative-flavor')
 console.log(data);

 require('./7-mind-grenade')



 sayHi(name.john)
 sayHi('surbhi')
 //sayHi(name)