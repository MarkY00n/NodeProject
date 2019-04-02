var http = require('http')

/**
 * HTTP Status Code 예
 * 1XX = 처리중 = 100 Continue
 * 2XX = 성공 = 200 Ok
 * 3XX = 리다이렉트 = 300 Multiple Choices
 * 4XX = 클라이언트 오류 = 400 Bad Requset
 * 5XX = 서버오류 = 500 Internal Server Error
 */
http.createServer(function (req, res) {
    res.writeHead(302, {'Location': 'http://www.naver.com'})
    res.end()
}).listen(52273, () => {
    console.log('Server Running http://localhost:52273')
})