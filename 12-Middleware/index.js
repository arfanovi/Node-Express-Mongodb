const express = require('express');
const app = express();
const PORT = 3001;

const myMiddleware = (req, res, next) => {
    console.log("Middleware function executed");
    req.currentTime = new Date(Date.now());
    next();
}

app.get("/", myMiddleware, (req, res) => {
    console.log("Home Route accessed at " + req.currentTime);
    res.send("I'm Home by by ");
});


app.get("/about", myMiddleware, (req, res) => {
    console.log("About Route accessed at " + req.currentTime);
    res.send("I'm About Route ");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use(myMiddleware)