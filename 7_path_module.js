//built in path module
const path = require('path');

console.log(path.sep);

const filePath = path.join(__dirname,'/content','subfolder','file.txt');
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname,'content','subfolder','file.txt');
console.log(absolute);