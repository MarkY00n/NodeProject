var fs = require('fs');

// 동기식으로 텍스트 파일을 읽어서 표시
var text = fs.readFileSync('./textfile.txt', 'utf8');
console.log(text);

// 비동기식으로 텍스트 파일을 읽어서 표시
fs.readFile('./textfile.txt', 'utf8', function(error, data) {
    console.log(data);
});

var data = 'Hello World..!';

// 비동기식으로 Hello World..! 문자열을 가진 텍스트 파일을 생성
fs.writeFile('./TextFileOtherWrite.txt', data, 'utf8', function(error, data) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

// 동기식으로 Hello World..! 문자열을 가진 텍스트 파일을 생성
fs.writeFileSync('./TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE ASYNC COMPLETE');


// 예외 처리 방법
//1. 읽기
try {
    var data = fs.readFile('./TextFileOtherWrited.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error.message);
        } else {
            console.log(data);
        }
    });
} catch (e) {
    console.log(e);
}

//2. 쓰기
try {
    fs.writeFileSync('./TextFile.txt', 'Hello Node.js', 'utf8');
    console.log('파일 쓰기 성공');
} catch (e) {
    console.log(e)
}