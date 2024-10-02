const http = require('http');
const fs = require('fs');

/*since the readFileSync is a blocking function and can block the thread till the operation is completed, using this here is not wrong,
because since this is the top order statements and the starting of the server only works after this block is completed.
So this doesnt affect when a user calls API, because the data is already fetched from the filesystem and is kept i a variable.
whenever API is called it returns this value. 
When this blocking function is used inside the server, it will block whenever someone hits the server.*/
const data = fs.readFileSync(`${__dirname}/../data/data.json`, 'utf-8');
const parsedData = JSON.parse(data);

var server = http.createServer((req, res) => {
    
    switch (req.url) {
        case '/api': {
            

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            
             break;
        }
        default: {
            res.end('Hello from server');
            }
    }
    
})

server.listen(8000, () => {
    console.log('Server is running');
    
});