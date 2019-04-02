process.on('exit', function(code) {
    console.log('exit:', code);
});

// 이벤트 강제 실행
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 종료
process.exit();

console.log('프로그램 실행중...');