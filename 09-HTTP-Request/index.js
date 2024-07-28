const express = require('express');
const app = express();
const PORT = 3001;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




/*
app.get("/", (req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    // res.send(`Student name is ${name} and id is ${id}`)
    // or 
    const {id, name} = req.query;
    res.send(`Student name is ${name} and id is ${id}`)
    // res.send("I'm Home route")
})

*/

// END 

// Route Param 
/*
app.get("/userId/:id/userAge/:age", (req,res)=>{

    const id = req.params.id;
    const age = req.params.id;
    res.send(`Student id is ${id} and age is ${age}`)

})
*/
// END 

// Headers 
/*
app.get("/", (req,res)=>{
    const id = req.header('id');
    const name = req.header('name')
    res.send(`Student id is ${id} and name is ${name}`)
})
*/
// END 



// how to make post request with josn or from data

app.post("/user", (req,res)=>{
    const name  = req.body.name;
    res.send(`Welcome ${name}`)
})
// END 


// send and receive form data


app.get("/registerForm", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.post("/registerForm", (req,res)=>{
    const fullName = req.body.fullName;
    res.send(`<h1>Your Name is ${fullName}</h1>`)
})


app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})