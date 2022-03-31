const express = require("express");
const app  = express();
app.use(express.json());
app.get("/login",(req,res)=>{
    req.query.uname === "ashokit" && req.query.upwd === "ashokit123" ? res.send("<h1>Login Success</h1>"):res.send("<h1>Login Fail</h1>");
});
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});