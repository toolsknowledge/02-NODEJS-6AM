const express = require("express");
const app = express();
app.use(express.json());
const LoginModule = require("./Login/Login");
app.use("/login",LoginModule);

const Module1 = require("./Module1/Module1");
app.use("/module1",Module1);

const Module2 = require("./Module2/Module2");
app.use("/module2",Module2);

const Module3 = require("./Module3/Module3");
app.use("/module3",Module3);

app.listen(8080,()=>{
    console.log("server listening the port no.8080")
});