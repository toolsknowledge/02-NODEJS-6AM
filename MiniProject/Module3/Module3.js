const express = require("express");
const Module3 = express.Router();
Module3.get("/",[require("../Middlewares/Middlewares")],(req,res)=>{
    res.json({"message":"wecome to module3"});
});
module.exports = Module3;