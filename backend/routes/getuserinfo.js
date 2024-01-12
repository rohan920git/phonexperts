const express = require("express");
const db = require('../db');
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtsec ="asonsfsaew@@#@AEOHADNsdfis";
router.get('/userprofile/:token',async(req,res)=>{
   const token = req.params.token;
   let tokendata;
     jwt.verify(token,jwtsec,(err,code)=>{
        if(err)
        {
            res.json(err);
        }
        else{
            tokendata = code;
        }

     })
    const user_id = tokendata.id;
  db.query("select name_,user_name,email,phone_number from users where id = ?",[user_id],(err,result)=>{
    if(err){
       return res.status(100).json({success:false,
        message:err});
    }
    else{
        res.json(result);
    }
  })
})
module.exports=router;