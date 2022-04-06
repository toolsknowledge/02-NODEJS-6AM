const express = require("express");
const obj = require("../Token/Token");
const Middleware = (req,res,next)=>{
    const allHeaders = req.headers;
    if(allHeaders.token === obj.token){
        next();
    }else{
        res.json({"message":"unauthorized user"});
    }
};
module.exports = Middleware;