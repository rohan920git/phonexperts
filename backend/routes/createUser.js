const express = require("express");
const db = require('../db');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtsec ="asonsfsaew@@#@AEOHADNsdfis";
router.post("/createuser",
[
body("name").isLength({min:2}),
body("username").isLength({min:3}),
body("email").isEmail(),
body("password").isLength({min:6})
],
async (req , res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    db.query('SELECT email FROM users WHERE email = ?',[email],(err,result)=>{
        if(err){
            res.json({"error":err});
        }
        else{
          if(result > 0){
            res.json({message:"email already exist"})
          }
        }
    })
    // const userdata = await User.findOne({email});
    // if(userdata){
    //   return res.status(400).json({success:false,
    //   message:"user already exists"})
    // }
    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password,salt);
  
    db.query('insert into users (name_,user_name, email , password_)values(?,?,?,?);',[req.body.name,req.body.username,email,secpassword],(err,result)=>{
        if(err){
            res.json({message:err});
        }
        else{
            res.json({success:true});
        }
    });
//   try{ 
//     console.log(req.body.name , req.body.email)
//     //   await User.create({
//     //       name:req.body.name,
//     //       email:req.body.email,
//     //       password:secpassword
//     //   })
//       res.json({success:true}) 
//   }
//   catch(error){
//     console.log(error)
//     res.json({success:false}) 
//   }
  }

)
module.exports=router;