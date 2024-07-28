const express = require('express');
const app = express();
const PORT = 3001;

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



// Route Param 
/*
app.get("/userId/:id/userAge/:age", (req,res)=>{

    const id = req.params.id;
    const age = req.params.id;
    res.send(`Student id is ${id} and age is ${age}`)

})
*/


// Headers 

app.get("/", (req,res)=>{
    const id = req.header('id');
    const name = req.header('name')
    res.send(`Student id is ${id} and name is ${name}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})