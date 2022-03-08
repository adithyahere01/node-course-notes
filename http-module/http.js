const http = require('http');

//createServer method creates a server object, takes 2 arguments (request and response)
const server = http.createServer((req,res)=>{
    // console.log(req.url)
    // res.write('Welcome to Node.js, Adithya')
    // res.end()

    if(req.url === '/'){
        res.write('Welcome to Node.js, Adithya')
    }
    if(req.url === '/about'){
        res.write("THis is about page")
    }
    res.write("error page")
})

server.listen(8000)