const express = require("express");
const db = require('../db');
const router = express.Router();
router.get("/getdata", async (req,res)=>{
 db.query("SELECT * FROM product_tbl",(err,data)=>{
    if(err){
        return res.json({"error":err})
    }
    else{
        // return res.json(res)
      res.json(data)
    }
 })
})
module.exports=router;