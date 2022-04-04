const express = require("express");
const app = express();


//middleware
const authorization = (req,res,next)=>{
    const allHeaders = req.headers;
    if(allHeaders.token === "kamal"){
        next();
    }else{
        res.send({"message":"unauthorized user"});
    }
}

app.get("/demo",[authorization],(req,res)=>{
    if(req.query.uname === "ashokit" &&  req.query.upwd === "ashokit123"){
        res.send({
            login : "success"
        })
    }else{
        res.send({
            login : "fail"
        })
    };
});

app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});