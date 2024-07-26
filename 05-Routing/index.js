const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const fs = require('fs')


const server = http.createServer((req, res)=> {

    const handleReadFile = (statusCode, fileLocation) => fs.readFile(fileLocation, (err, data)=>{
        res.writeHead(statusCode, {'Content-Type':'text/html'});
        res.write(data);
        res.end()
        
    })


    // res.end("Welcome to server now")
    if(req.url === '/'){
        handleReadFile(200, "./Component/index.html")
    }
    else if(req.url === '/about'){
        handleReadFile(200, "./Component/about.html")
    }
    else if (req.url === '/contact'){
        handleReadFile(200, "./Component/contact.html")
    }
    else{
        fs.readFile("./Component/error.html", (err, data)=>{
           
        })
    }
});

server.listen(port, hostname, () =>{
    console.log(`Server is running and port is http://${hostname}:${port}`)
});











