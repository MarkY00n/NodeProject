// 절대값을 구하는 메소드
exports.abs = function (number) {
    if (0 < number) {
        return number;
    } else {
        return -number;
    }
}

// 원의 넓이를 구하는 메소드
exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}