var EventEimtter = require('events')
exports.timer = new EventEimtter()

// 1초 간격으로 이벤트 강제 실행
setInterval(function() {
    exports.timer.emit('tick')
}, 1000)