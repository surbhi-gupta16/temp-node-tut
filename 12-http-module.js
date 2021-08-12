// http module - allow us to set up a web server

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to the home page')
    }
   // console.log(req);
    //res.write('welcome to the home page')
   // res.end()

   if(req.url === '/about'){
       res.end('Here is our short history')
       
   }

   res.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>

   `)
})

server.listen(5000)