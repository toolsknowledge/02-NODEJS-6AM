//import express module
//require() function used to import the modules
const express = require("express");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest services


//get request
app.get("/",(req,res)=>{
    res.json({"message":"welcome to default get request"});
});
app.get("/products",(req,res)=>{
    res.json({"message":"welcome to products get request"});
});


app.post("/",(req,res)=>{
    res.json({"message":"wecome to default post request"});
});
app.post("/products",(req,res)=>{
    res.json({"message":"welcome to products post request"});
});




app.head("/",(req,res)=>{
    res.json({"message":"wecome to default head request"});
});
app.head("/products",(req,res)=>{
    res.json({"message":"welcome to products head request"});
});



app.delete("/",(req,res)=>{
    res.json({"message":"wecome to default delete request"});
});
app.delete("/products",(req,res)=>{
    res.json({"message":"welcome to products delete request"});
});




//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});