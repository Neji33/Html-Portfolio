const http = require("http");
const fs =  require("fs");
const url =  require("url");
const myServer= http.createServer((req,res) =>{
    if (req,url === "/favicon.ico")return res.end();
    const log = `${Date.now()}: ${req.url} New Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err,data)=>{
        switch(myUrl.pathname){
            case "/": // here / means homepage 
                res.end("Homepage");
                break;
            case "/about":
                res.end("I am Tarun ");
                break;
            default:
                res.end("404 not found ");
                break;

    
                


        }
    })
});
myServer.listen(8000, () => console.log("Server Started!"));
