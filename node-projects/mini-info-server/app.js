const http = require('http');

const error_server = require ('../../node-learing/servers');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url === '/'){
        res.end("Welcome to Home Page!!");
        return 
    }
    if(req.url === '/about'){
        res.end("About Page!!");
        return
    }
    if(req.url === '/contact'){
        res.end("Contact Page!!");
        return
    }
    if(req.url === '/error'){
        error_server.handle_error(res);
        return
    }
    res.end("Page Not Found!!");
})

server.listen(3000);