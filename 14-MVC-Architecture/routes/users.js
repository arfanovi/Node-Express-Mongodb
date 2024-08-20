const express = require('express');

const { getUsers, saveUser } = require('../controller/usersController');
const router = express.Router()

app.get("/users",  getUsers)

app.post("/users", saveUser)


module.exports = router;