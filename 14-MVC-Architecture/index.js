const express = require("express");

const userRouter = require('./routes/users')

const app = express();
const PORT = 4001;

app.use(express.urlencoded({extended:true}))
app.use(userRouter);



app.use((req, res, next)=>{
    res.status(404).json({
        message: "resource not found"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running and Port is ${PORT}`)
})