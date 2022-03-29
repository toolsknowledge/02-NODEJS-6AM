const express = require("express");
const Module1 = express.Router();
Module1.get("/",(req,res)=>{
    res.json({"message":"welcome to module1"});
});
Module1.get("/req1",(req,res)=>{
    res.json({"message":"req1"});
});


module.exports = Module1;