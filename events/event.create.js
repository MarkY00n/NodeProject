// 이벤트 객체 생성
var EventEimtter = require('events')
var custom = new EventEimtter()

custom.on('tick', function(code) {
    console.log('이벤트 실행 %d', code);
})

custom.emit('tick', 1)
