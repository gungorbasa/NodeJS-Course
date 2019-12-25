const http = require('http');
const router = require('./router');

http.createServer(router.requestHandler).listen(3000);