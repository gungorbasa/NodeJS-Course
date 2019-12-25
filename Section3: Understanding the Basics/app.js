const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><h1>Hello World!</h1></html>');
    res.end();
}).listen(3000);