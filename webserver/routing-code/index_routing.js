const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/overview') {
         res.end('Hello from overview server');
    } else if (req.url === '/product') {
         res.end('Hello from product server');
    } else {
        res.writeHead(404, {
            "Contentt-Type": "text/html",
            "my-own-header":"sample header of mine"
        });
 res.end('<h1>Errror page</h1>');
    }
   
    
});

server.listen(8000, () => {
    console.log('Server is running');
    
});
