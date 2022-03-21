const http = require("http");
const url = require("url");
const server = http.createServer((req,res)=>{
     res.writeHead(200,{"Content-Type":"text/html"});
     const queryObject = url.parse(req.url,true).query;
     const uname = queryObject.uname;
     const upwd = queryObject.upwd;
     uname === "ashokit" && upwd === "ashokit" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
     res.end();
});
server.listen(8080,()=>{
    console.log("server listening the port no.8080");
});