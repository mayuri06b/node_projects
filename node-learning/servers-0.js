const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/error"){
        console.log("Error Occured");
        res.end(`<h1>404 Page Not found!</h1>
            <a href="/">Go back </a>
            `);
        return
    }
    res.end('Hello World\n');
})
const PORT = 5000
server.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})
