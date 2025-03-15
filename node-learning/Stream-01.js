const fs = require('fs');

const writeStream = fs.WriteStream('text.txt');

writeStream.write('Hello written from write stream 1\n');

writeStream.write('Hello written from write stream 2');

writeStream.end(()=>{
    console.log('Write stream ended');
})