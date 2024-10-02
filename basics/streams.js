const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req,res) => {
    // fs.readFile('test-file.txt', 'utf-8', (err,data) => {
    //     if (err) console.log('error parsing file');
    //     res.end(data);
    // })

    const readStream = fs.createReadStream('test-file.txt');
    readStream.pipe(res);
});
server.listen(8000, () => {
    console.log('server is running');
    
 }); 