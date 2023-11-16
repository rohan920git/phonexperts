const express = require('express');
const cookieParser = require('cookie-parser');
const mysql = require("mysql");
const db = require('./db')
const app = express();
const users = require('./routes/createUser')
const getdata  = require('./routes/getdata')
const getdetails  = require('./routes/getdetails')
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

app.use(require("cors")({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser())


app.use(require('body-parser').json())
app.use(express.json());
app.use('/',users);
app.use('/',getdata);
app.use('/',getdetails);
app.listen(PORT, ()=>{
    console.log("server started");
})