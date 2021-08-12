// Built-in modules in node.js
 // os module give info abt os and server!!!
 const os = require('os')
  
 // info about current user 
 const user = os.userInfo()
 console.log(user);

 // methods return the system uptime in seconds
 console.log(`system uptime is ${os.uptime()} seconds`);

 //
 const currentOS = {
     name:os.type(),
     release:os.release(),
     freeMem:os.freemem(),
     totalMem:os.totalmem()
 }
console.log(currentOS);
 