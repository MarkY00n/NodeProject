// node.js 는 한 이벤트에 10개가 넘는 이벤트 리스너를를 연결할 경우 이를 개발자 실수로 간주한다.
// 하지만 실제 프로젝트 진행 시 많은 이벤트 리스너를 연결하는 경우가 있으므로 이벤트 연결 갯수 제한을 하는 메서드를 이용하여 해결한다.

// 이벤트 연결 개수 제한을 15개 늘린다.
// 무한대로 연결하고 싶으면 '0' 을 입력하면 된다.
process.setMaxListeners(15);

// 이벤트 연결
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});
process.on('exit', function(){});