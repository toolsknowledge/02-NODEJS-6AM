const express = require("express");
const jwt = require("jwt-simple");
const obj = require("../Token/Token");
const LoginModule = express.Router();
LoginModule.post("/",(req,res)=>{
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    if(uname === "admin" & upwd === "admin123"){
          //generate the token
          const token = jwt.encode({"uname":uname,"upwd":upwd},"abcd1234");
          obj.token = token;
          res.json({"login":"success","token":token});
    }else{
        res.json({"login":"fail"});
    }
});
module.exports = LoginModule;