const express = require("express");
const app = express();
app.use(express.json());
app.get("/login/:uname/:upwd",(req,res)=>{
    req.params.uname === "ashokit" && req.params.upwd === "ashokit123" ? res.json({"message":"Login Success"}) : res.json({"message":"Login Fail"});
});
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});