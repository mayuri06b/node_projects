const {readFileSync , writeFileSync} = require('fs')
const str = readFileSync('./text.txt','utf8')
writeFileSync('./text.txt',"hello mayuri",{flag:'a'})
console.log(str);
