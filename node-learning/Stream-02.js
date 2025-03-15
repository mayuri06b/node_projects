const fs = require('fs');

const readStream = fs.ReadStream('text.txt' , 'utf8');

readStream.on('data' , (chunck)=>{
    console.log(`Data Read :${chunck}`);
})

readStream.on('end', ()=>{
    console.log('End of file reached');
})