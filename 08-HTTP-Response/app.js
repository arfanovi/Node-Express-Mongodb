const express =  require('express');
const app = express();

// access router folder 
const userRouter = require('./Routes/user.route')



// Use this access routes 
app.use("/api/user", userRouter);




// Send JSON File 
// app.use("/register", (req,res)=>{
//     // res.status(200).json({
//     //     message: "I'm Register Page",
//     //     statusCode: 200
//     // })

//     // res.redirect("/login")
// })

// Send Html FIle 
app.use("/register", (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html")
})


app.get("/login", (req,res)=>{
    // res.send("I'm Login Page")
    res.cookie("name", "ovi");
    res.cookie("age", "30");
    res.clearCookie("name")
    res.append("id","201002487")
    res.end();
})

// Home Route 
app.use("/", (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
})



app.use((req,res)=>{
    res.send("<h1>404 Not valid URL</h1>")
})





module.exports = app;