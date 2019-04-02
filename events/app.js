var rint = require('./rint.js')

// rint.js 의 timer 이벤트를 연결
rint.timer.on('tick', function(code) {
    console.log('이벤트 실행')
}) 