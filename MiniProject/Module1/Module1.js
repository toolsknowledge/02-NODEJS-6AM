const express = require("express");
const Module1 = express.Router();
Module1.get("/",[require("../Middlewares/Middlewares")],(req,res)=>{
    res.json({"message":"welcome to module1"});
});
module.exports = Module1;