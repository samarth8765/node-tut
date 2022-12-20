//built in module fs
const fs = require('fs');

const first = fs.readFileSync("./content/subfolder/file.txt",'utf-8');
console.log(first);

fs.writeFileSync("./content/subfolder/result.txt",`Here is the result of ${first} `)