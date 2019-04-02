// 변수 선언
var onUncaughtException = function(error) {
    console.log(`CaughtException:${error}`);

    process.removeListener('uncaughtException', onUncaughtException);
}

// process 객체에 uncaughtException 이벤트를 연결
process.on('uncaughtException', onUncaughtException);

/*
이벤트 리스너를 한번만 연결한다.
process.once('uncaughtException', function(error) {
    console.log(`CaughtException:${error}`);
});
*/

// 2초 간격으로 예외 발생
var test = function() {

    //예외를 강제로 발생시킨다.
    setTimeout(test, 2000);
    error.error.error();
}
setTimeout(test, 2000);