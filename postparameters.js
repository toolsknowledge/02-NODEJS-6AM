const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    if(req.method == "POST"){
        var postparameters = "";
        req.on("data",function(data){
            postparameters+=data;
        });
        req.on("end",function(){
            var postdata = querystring.parse(postparameters);
            if(postdata["uname"] == "ashokit" && postdata["upwd"] == "ashokit"){
                res.write("<h1>Login Success</h1>");
            }else{
                res.write("<h1>Login Fail</h1>");
            }
            res.end();
        });
    }
});
server.listen(8080,()=>{
    console.log("server listening the port no.8080");
});