const express = require('express');
const mysql = require("mysql");
const db = require('./db')
const app = express();
const users = require('./routes/createUser')
const PORT  = 5000;

app.use(require('body-parser').json())
app.use(express.json());
app.use('/',users);
app.listen(PORT, ()=>{
    console.log("server started");
})