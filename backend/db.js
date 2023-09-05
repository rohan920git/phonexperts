const mysql = require("mysql")
const dbcofig= {
    host :'localhost',
    user : 'root',
    password: 'rohanb158',
    database:'phonexpert'
}
const db = mysql.createPool(dbcofig);
// pool.getConnection((err,connection)=>{
//     if(err){
//         return console.log(err);
//     }
//     connection.query("SELECT * FROM employes;",(qerr,results)=>{
//         connection.release();
//         if(qerr){
//             return console.log(qerr);
//         }
//         else{
//             return console.log(results);
//         }
//     })
// })
module.exports=db;