const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greetHello' , (username)=>{
    console.log(`Welcome to the website ${username}`);
})

emitter.emit('greetHello','Mayuri');