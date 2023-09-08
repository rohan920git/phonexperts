const express = require('express');
const mysql = require("mysql");
const db = require('./db')
const app = express();
const users = require('./routes/createUser')
const PORT  = 5000;
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Allow-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    )
    next();
})
 // allow Cross-domain requests 
 app.use(require("cors")())
app.use(require('body-parser').json())
app.use(express.json());
app.use('/',users);
app.listen(PORT, ()=>{
    console.log("server started");
})