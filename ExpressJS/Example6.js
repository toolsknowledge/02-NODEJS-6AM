const express = require("express");

const app = express();

app.use(express.json());






app.post("/login",(req,res)=>{
    console.log(req.body);
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    if(uname === "ashokit" && upwd === "ashokit123"){
        res.json({
            "login" : "success"
        });
    }else{
        res.json({
            "login" : "fail"
        });
    }
});

app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});