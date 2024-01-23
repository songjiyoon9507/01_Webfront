const result = document.getElementById("result");
const cal1 = document.getElementById("cal1");

function one() {
    const cal1 = 1;

    result.innerText = cal1;
}

function calc(op) {

    let result;

    switch(op) { 
        case '+': result = v1 + v2; break;
        case '-': result = v1 - v2; break;
        case '*': result = v1 * v2; break;
        case '/': result = v1 / v2; break;
        case '%': result = v1 % v2; break;

        // 맞는 case가 없을 경우에 적용할 기본값 (else)
        default : result = "잘못된 연산자"; break;
    }

    calcResult.innerText = result;
}