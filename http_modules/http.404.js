var http = require('http').createServer(function(req , res) {
    res.writeHead(404)
    res.end()
}).listen(52273, () => {
    console.log('Server Running http://localhost:52273')
})