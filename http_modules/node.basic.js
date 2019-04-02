var http = require('http')

// http://127.0.0.1:52273 로 접속
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello Web Server with Node.js</h1>')
}).listen(52273, () => {
    console.log('Server Running at http://localhost:52273')
})