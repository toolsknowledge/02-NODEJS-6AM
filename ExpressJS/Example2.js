const express = require("express");
const Module1 = require("./Module1");
const Module2 = require("./Module2");
const Module3 = require("./Module3");

const app = express();

app.use("/m1",Module1);
app.use("/m2",Module2);
app.use("/m3",Module3);

app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});



//http://localhost:8080/m1/req1    (GET)

//http://localhost:8080/m2/req2     (POST)

//http://localhost:8080/m3/req3     (DELETE)