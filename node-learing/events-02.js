const http = require('http')

const EventEmitter = require('events');
const { log } = require('console');

const emitter = new EventEmitter();

emitter.on('loginpopup' , (username , url)=>{
    console.log(`Welcome to the website ${username}`);
    console.log(`Logged in through url:${url}`);
})


const server = http.createServer((req , res) =>{
    emitter.emit('loginpopup','Mayuri',req.url);
    if (req.url === '/') {
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else {
        res.end('Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`Server is running on PORT NO:${PORT}`);
    console.log(`Click here to visit the website http://localhost:${PORT}`);
     
})

