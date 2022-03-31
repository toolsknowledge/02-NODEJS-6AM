const express = require("express");
const app = express();
//json
//communication language between client and server
//MIME
app.use(express.json());

//get request
app.get("/login",(req,res)=>{
    const uname = req.query.uname;
    const upwd = req.query.upwd;
    if(uname === "ashokit" && upwd === "ashokit123"){
        res.json({"message":"Login Success"});
    }else{
        res.json({"message":"Login Fail"});
    }
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});
