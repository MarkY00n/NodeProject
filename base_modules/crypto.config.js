var crypto = require('crypto');

/*
 * 해시 생성 방법
const filename = process.argv[2];
const fs = require('fs');

const hash = crypto.createHash('sha256');

const input = fs.createReadStream(filename);
input.on('readable', () => {
    var data = input.read();
    if (data) {
        hash.update(data);
    } else {
        console.log(`${hash.digest('hex')} ${filename}`)
    }
})
*/

//해시를 생성
var shasum = crypto.createHash('sha256');
// crypto_hash 문자열을 해시로 변경
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash:', output);


//------------------------//

var key = '아무도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipherOutput = decipher.final('utf8');

//출력
console.log('원래 문자열:' + input);
console.log('암호화:' + cipheredOutput);
console.log('암호화 해제:' + decipherOutput);