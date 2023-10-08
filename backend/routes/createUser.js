const express = require("express");


const db = require('../db');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const jwtsec ="asonsfsaew@@#@AEOHADNsdfis";
const getCurrentTimestamp = () => {
  const now = new Date();
  const timestamp = now.toISOString().slice(0, 19).replace('T', ' ');
  return timestamp;
};
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
      return res.status(400).json({ success:false , errors: errors.array() , message:"Password Length must be more than 6"});
    }
    let email = req.body.email;
    db.query('SELECT email FROM users WHERE email = ?',[email],(err,result)=>{
        if(err){
            res.json({success:false,message:err});
        }
        else{
          if(result.length !== 0){
            res.status(400).json({success:false, message:"email already exist"})
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
   
    
    const timestamp = getCurrentTimestamp();
    db.query('insert into users (name_,user_name, email , password_,created,modified)values(?,?,?,?,?,?);',[req.body.name,req.body.username,email,secpassword,timestamp,timestamp],(err,result)=>{
        if(err){
            res.json({success:false, message:err});
        }
        else{
            res.json({success:true ,message:"account successfully Created" });
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

);
router.post("/login",[
  body("email").isEmail(),
  body("password").isLength(6)
], async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({success:false,"error" : errors,message:"Credentials are not in right formate"})
    }

  
    db.query('SELECT * FROM users WHERE email = ?',[req.body.email], async(err,result)=>{
      if(err){
          res.json({success:false,"error":err});
      }
      if( result.length === 0 ){
        return res.status(400).json({success:false , message:"email does not exist"});

      } 
     const user = result[0];
     let pwdcompare =  await bcrypt.compare(req.body.password , user.password_);
     if(!(pwdcompare)){
       
       return res.status(400).json({error : "enter correct password" ,
                                     message : "password is worong",
                                     success:false});
     }
     const token =  jwt.sign({id: user.id, username: user.username} , jwtsec);
     
     res.cookie("authCookie",token,{})
     res.json({ success: true, token: token });
    }
  )




})
module.exports=router;