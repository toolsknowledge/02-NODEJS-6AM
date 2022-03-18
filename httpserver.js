//http server

//http is the predefined module
//http module used to create the http server
//require() is the predefined function used to import the modules

const http = require("http");


const server = http.createServer((req,res)=>{
    //MIME Type
    //HTML
    res.writeHead(200,{"Content-Type":"text/html"});

    //send res to client
    res.write("<h1>Hello, welcome to http server</h1>");

    res.end();
});


server.listen(8080,()=>{
    console.log("server listening the port no.8080");
});

