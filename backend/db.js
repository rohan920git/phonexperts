const mysql = require("mysql")
const dbcofig= {
    host :'localhost',
    user : 'root',
    password: 'rohanb158',
    database:'phonexpert'
}
const db = mysql.createPool(dbcofig);


module.exports=db;