// 변수 선언

// document : HTML문서 내에서
// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는

const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");

console.log(number1);
console.log(number2);
console.log(result);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
    // input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    //number1 = input요소
    const value2 = number2.value;

    console.log(value1, value2);
    
    console.log("두 수의 합 :", value1 + value2);

    // -> input 요소에 작성된 값 무조건 문자열(string) 형태라서
    // 더했을 때 이어쓰기 되는 문제가 발생한다.

    // [해결방법]
    // 문자열(string)을 숫자(number)으로 변경하는 코드를 수행
    
    // 숫자만 작성된 문자열("123") 을
    // 진짜 숫자(123)로 바꾸는 방법
    // -> Number("123") -> 123

    console.log("두 수의 합 :", Number(value1) + Number(value2) );

    /* 
    두 수의 합을
    아이디가 "calcResult"인 요소(result 변수)의
    내부 글자(innerText, HTML 요소 내용)로 대입하기
    */

    result.innerText = Number(value1) + Number(value2);
    // 100 이라고 써있는 곳이 innerText
} // plusFn 끝

// 빼기 함수
/* function minusFn() {
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) - Number(value2);
} */
//위에 주석과 같음
function minusFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 - value2;
}

// 곱하기 함수
/* function multiFn() {
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) * Number(value2);
} */
function multiFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 * value2;
}


// 나누기 함수
/* function divFn() {
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) / Number(value2);
} */
function divFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 / value2;
}

// 나머지 함수
/* function modFn() {
    const value1 = number1.value;
    const value2 = number2.value;
    result.innerText = Number(value1) % Number(value2);
} */
function modFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = value1 % value2;
}

//응용 문제
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const total = document.getElementById("total");

function totalFn() {
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);

    total.innerText = value1 + value2 + value3;
}

// 증가/감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언
let count = 0;
// (주의) const로 선언하면 값을 증가/감소 시킬 수 없다

// 문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

// 1 증가 함수
function increase() { 
    count++; // 또는 ++count -> count 값이 1 증가
    // 증가한 count 값을 result2의 내용으로 대입
    result2.innerText = count;
}

// 1 감소 함수
function decrease() {
    count--; // 또는 --count -> count 값이 1 감소
    result2.innerText = count;
}

// 전위, 후위 연산 확인하기
function check() {
    // 함수 박, 안은 구분되는 공간으로 생각하면 됨
    // 밖에 작성한 변수 count, 안에 작성한 count는
    // 서로 다른 변수(동명이인)
    let count = 100;

    // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
    // 코드를 하나하나 실행하는 것들이 연산
    
    //전위 연산(++count, --count) 확인
    // -> 다른 연산보다 먼저 수행
    // -> count 값이 먼저 증가, 감소된 후 console에 출력

    console.log("++count :", ++count);
    console.log("++count :", ++count);
    console.log("++count :", ++count);
    console.log("--count :", --count);
    console.log("--count :", --count);
    console.log("--count :", --count);

    // 후위 연산(count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행

    count = 50;

    console.log("count++ :", count++);
    // 50으로 출력 후 51 값이 됨
    console.log("후위 연산 후 count :", count);
    //출력값 51

    console.log("count-- :", count--); // 51 출력 후 50으로 감소
    console.log("후위 연산 후 count :", count);//  50 출력

    let a = 10;
    let b = 5;
    let c =  ++a * b--;
    // 코드는 위에서부터 아래로 흐름
    // 11*5 곱하기 연산 끝난 후 -- 되면서
    // b가 4가 됨

    //최종적으로 a,b,c 에 저장된 값은 얼마?
    // a == 11
    // b == 4
    // c == 55
    console.log(a, b, c);   
}

function printJSObject() {

    const userName = document.getElementById("userName");
    const userAge = document.getElementById("userAge");
    const userGender = document.getElementById("userGender");
    
    const userInfo = {
        이름 : userName.value,
        나이 : userAge.value,
        성별 : userGender.value
    };

    console.log(userInfo);
}