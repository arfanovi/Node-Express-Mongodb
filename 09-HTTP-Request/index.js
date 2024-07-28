const express = require('express');
const app = express();
const PORT = 3001;


app.get("/", (req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    // res.send(`Student name is ${name} and id is ${id}`)
    // or 
    const {id, name} = req.query;
    res.send(`Student name is ${name} and id is ${id}`)
    // res.send("I'm Home route")
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})