const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is running and port is ${PORT}`);
});
