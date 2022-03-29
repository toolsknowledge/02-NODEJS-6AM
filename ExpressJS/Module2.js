const express = require("express");
const Module2 = express.Router();
Module2.get("/",(req,res)=>{
    res.json({"message":"welcome to Module2"});
});
Module2.post("/req2",(req,res)=>{
    res.json({"message":"req2"});
});
module.exports = Module2;