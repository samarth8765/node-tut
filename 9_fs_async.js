const fs = require("fs");

// The fs.writeFile function is inside the callback of fs.readFile because the fs.readFile function is asynchronous, which means that it reads the file in the background and doesn't block the rest of your code from running.

// The fs.readFile function takes a callback function as its third argument, which is called when the file has been read. The callback function takes two arguments: an error object (if an error occurred) and the contents of the file.

// Because the fs.writeFile function needs to use the contents of the file, which are passed to the callback function as the second argument, it needs to be inside the callback function so that it has access to the contents of the file.

const result = fs.readFile('./content/subfolder/result.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    const first = result;
    fs.writeFile('./content/subfolder/result-sync.txt',
    `Here is the result : ${first}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    }
    );
});
