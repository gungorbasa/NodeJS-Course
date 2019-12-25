const http = require('http');
const router = require('./routes');

http.createServer(router.handler).listen(3000);