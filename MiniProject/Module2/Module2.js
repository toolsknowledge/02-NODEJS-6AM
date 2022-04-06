const express = require("express");
const Module2 = express.Router();
Module2.get("/",[require("../Middlewares/Middlewares")],(req,res)=>{
    res.json({"message":"welcome to module2"});
});
module.exports = Module2;