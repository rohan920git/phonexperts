const express = require("express");

const db = require('../db');
const router = express.Router();
router.get("/getdetails/:id", async (req,res)=>{
    const id = req.params.id;
   
 db.query(`SELECT *
 FROM product_tbl
 LEFT JOIN product_specs ON product_tbl.id = product_specs.p_id where product_tbl.id = ${parseInt(req.params.id)}`,(err,data)=>{
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