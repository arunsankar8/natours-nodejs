const http = require('http');


var server = http.createServer((req, res) => {
    res.end('Request hit : Response send "Hello world"');
});

server.listen(8000,() => {
    console.log("Server is runnning...");
})