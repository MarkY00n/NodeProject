var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res) {
    var pathName = url.parse(req.url).pathname
    console.log('pathName:' + pathName)
    //페이지 구분
    if (pathName == '/') {
        //first.html 파일을 읽습니다.
        fs.readFile('first.html', function(error, data) {
            if (error) {
                console.log(error.message)
            } else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.end(data)
            }
        })
    } else if (pathName == '/second') {
        //second.html 파일을 읽습니다.
        fs.readFile('second.html', function(error, data) {
            if(error) {
                console.log(error.message)
            } else {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.end(data)
            }
        })
    }
}).listen(52273, () => {
    console.log('Server Running http://localhost:52273')
})

