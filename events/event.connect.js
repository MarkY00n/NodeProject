//process 객체에 exit 이벤트 연결
process.on('exit', function(code) {
    console.log('About to exit with code:', code);
});

process.on('uncaughtException', function(error) {
    console.log(`Caught exception: ${error}`);
});

var count = 0;
var test = function () {
    // 탈출 코드
    count = count + 1;
    if (count > 3) {return;}

    //예외를 강제로 발생시킨다.
    setTimeout(test, 2000);
    error.error.error();
}

setTimeout(test, 2000);