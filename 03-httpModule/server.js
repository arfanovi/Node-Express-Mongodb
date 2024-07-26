// http modules
/*
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
    res.end("Hello I'm First Server")
});

myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})

*/



// More Http 
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>Hello I'm First Server</h1>");
    res.end()
});

myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})