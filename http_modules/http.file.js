var fs = require('fs')
var http = require('http')

/* 
    Content-Type 종류
    text/plain = 기본적인 텍스트
    text/html = HTML 문서
    text/css = CSS 문서
    text/xml = XML 문서
    image/jpeg = jpg/jpeg 그림 파일
    image/png = png 그림 파일
    video/mpeg = mpeg 비디오 파일
    audio/mp3 = mp3 음악 파일

    그 외에는 MIME 형식은 'MIME TYPE 목록' 검색
*/

var server = http.createServer(function(req, res) {
    //HTML 파일을 읽습니다.
    fs.readFile('./index.html', function(error, data) {
        if (error) {
            console.log(error.message)
        } else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    })
}).listen(52283, () => {
    console.log('Server Running http://localhost:52283')
})

http.createServer(function(req, res) {
    fs.readFile('./audio/Rihanna_Diamonds.mp3', function(error, data) {
        if (error) {
            console.log(error.message)
        } else {
            res.writeHead(200, {'Content-Type':'audio/mp3'})
            res.end(data)
        }
    })
}).listen(52203, () => {
    console.log('Server Running http://localhost:52203')
})


http.createServer(function(req, res) {
    fs.readFile('./image/image.jpg', function(error, data) {
        if (error) {
            console.log(error.message)
        } else {
            res.writeHead(200, {'Content-Type':'image/jpeg'})
            res.end(data)
        }
    })
}).listen(52213, () => {
    console.log('Server Running http://localhost:52213')
})