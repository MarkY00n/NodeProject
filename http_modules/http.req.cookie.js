var http = require('http')

http.createServer(function(req,res) {
    //쿠키가 있는지 확인
    if(req.headers.cookie) {
        var cookie = req.headers.cookie.split(';').map(function(element) {
            var element = element.split('=')
            return {
                key: element[0],
                value: element[1]
            }
        })

        res.end('<h1>' + JSON.stringify(cookie) +'</h1>')
    } else {
        res.writeHead(200, {'Content-Type':'text/html', 'Set-Cookie' : ['name = mark', 'job = programmer']})
        res.end('<h1>쿠키가 생성되었습니다.</h1>')
    }
}).listen(52273, () => {
    console.log('Server Running http://localhost:52273')
})