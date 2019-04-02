var http = require('http')
var fs = require('fs')


http.createServer(function(req, res) {

    if(req.method == 'GET') {
        fs.readFile('post.html', function(error, data) {
            if(error) {
                console.log(error.message)
            } else {
                res.writeHead(200, {'Contet-Type':'text/html'})
                res.end(data)
            }
        })
    } else if(req.method == 'POST') {
        req.on('data', function(data) {
            console.log('POST data:', data)
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end('<h1>' + data + '</h1>')
        })
    }
}).listen(52273, () => {
    console.log('Server Running http://localhost:52273')
})