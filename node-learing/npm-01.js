const fp = require('fs')

const data = fp.readFileSync('./package.json','utf-8');

const jason_data = JSON.parse(data);
console.log(jason_data.dependencies.bootstrap);
