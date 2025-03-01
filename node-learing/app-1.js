// const methods = require('./calculator');
// console.log(methods);

// Built In Module 
// OS Module 
const os = require('os')
var os_info = {
    "name" : os.type(),
    "release" : os.release(),
    "platform" : os.platform(),
    "arch" : os.arch(),
    "uptime" : os.uptime(),
    "freemem":os.freemem()
}

// console.log(os_info);

//Path module
const path = require('path')
console.log(path.isAbsolute('C:/Users/91808/Desktop/node/backend-experiments'));
