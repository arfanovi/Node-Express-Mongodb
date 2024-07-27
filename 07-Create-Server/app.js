const express =  require('express');
const app = express();

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



module.exports = app;