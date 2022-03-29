const express = require("express");
const Module3 = express.Router();
Module3.get("/",(req,res)=>{
    res.json({"message":"welcome to Module3"});
});

Module3.delete("/req3",(req,res)=>{
    res.json({"message":"Req3"});
});
module.exports = Module3;