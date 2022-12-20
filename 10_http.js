const http = require('http');

const server = http.createServer((req,res)=>{
    res.write(`<h1>Hola Amigo</h1>`);
    res.end();
    console.log(req.url);
});

server.listen(3000, ()=>{
    console.log("Server is listening");
});
