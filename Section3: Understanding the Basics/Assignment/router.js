
function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message!</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end()
    } else if (url === '/users') {
        console.log('List');
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>');
        return res.end()
    } else if (url === '/create-user' && method === 'POST') {
        const buffer = [];
        req.on('data', (content) => {
            buffer.push(content);
        });

        return req.on('end', () => {
            const username = Buffer.concat(buffer).toString().split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}

module.exports.requestHandler = requestHandler;