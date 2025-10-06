const http = require('http');
http.createServer((req,res) => {
    res.write('welcome to the page')
    res.end();
}).listen(5500);


