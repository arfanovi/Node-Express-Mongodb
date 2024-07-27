const express =  require('express');
const app = express();

// access router folder 
const userRouter = require('./Routes/users.route')

// Know about HTTP methods 
/*
app.get("/", (req, res)=> {
    res.send("I am a GET request at home route")
})

app.post("/", (req, res)=> {
    res.send("I am a POST request at Home route")
})

app.put("/", (req, res)=> {
    res.send("I am a PUT request at Home route")
})

app.delete("/", (req, res)=> {
    res.send("I am a Delete request at Home route")
})

*/


// Use this access routes 
app.use("/api/user", userRouter);

app.use((req,res)=>{
    res.send("<h1>404 Not valid URL</h1>")
})

module.exports = app;