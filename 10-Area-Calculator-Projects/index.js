const express = require('express');
const app = express();
const PORT = 5001;
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get("/", (req, res)=>{
    res.sendfile(__dirname + "/index.html")
})

app.get("/triangle", (req, res)=>{
    res.sendfile(__dirname + "/triangle.html")
})

app.get("/circle", (req, res)=>{
    res.sendfile(__dirname + "/circle.html")
})

app.post("/triangle" ,(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h1>Area of triangle is : ${area}</h1>`)
})

app.post("/circle", (req, res) => {
    const radius = parseFloat(req.body.radius); // parse radius to a number
    if (isNaN(radius)) {
        return res.status(400).send('Invalid radius');
    }
    const area = Math.PI * radius * radius;
    res.send(`Area of circle is ${area}`);
});
app.listen(PORT, ()=> {
    console.log(`Server is Running and port is ${PORT}`)
})