for(let num = 1; num <= 5; num++) {
    // 조건식이 TRUE인 경우 반복 수행할 코드;
    console.log("통과");
}

function check1() {

    let result = ""; // 빈 문자열
    // "12345"
    for(let num = 1; num <= 5; num++) {
        // console.log(num);

        result += num;
        // result = result + num;
        // "1" = "" + "1" (1턴)
        // "12" = "1" + "2" (2턴)
        // "123" = "12" + "3" (3턴)
        // "1234" = "123" + "4" (4턴)
        // "12345" = "1234" + "5" (5턴)
        // num은 6까지 늘어남 조건식 맞지 않아서 수행은 안됨
    }
    console.log(result);
}

// 1부터 10까지 1씩 증가하며 출력
function check2() { 
    for(let num = 1; num <= 10; num ++) {
        console.log(num);
    }
}

// 1부터 20까지 1씩 증가하며 출력
function check3() {
    for(let num = 1; num <= 20; num++) {
        console.log(num);
    }
}

// 5부터 15까지 1씩 증가하며 출력
function check4() {
    for(let num = 5; num <= 15; num++) {
        console.log(num);
    }
}

// 1부터 30까지 2씩 증가하며 출력
function check5() {
    for(let num = 1; num <= 30; num += 2) {
        console.log(num);
    }
}

// 1부터 10까지 모든 정수의 합
function check6() {
    let sum = 0; // 합계를 저장하기 위한 변수
    for(let num = 1; num <= 10; num++) { // num 1~10 변함
        sum += num;
    }
    console.log("sum :",sum);
}

// 입력 받은 범위 내 모든 정수의 합 구하기

// const num1 = document.getElementById("inputNumber1-1");
// const num2 = document.getElementById("inputNumber1-2");
// const result1 = document.getElementById("result1");

// function sumFn() {
//     let sum = 0;
//     const v1 = Number(num1.value);
//     const v2 = Number(num2.value);
//     for(let num = v1; num <= v2; num++) {
//         sum += num;
//     }
//     result1.innerText = sum;
// }

function sumFn() {

    // input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    
    // 결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start 부터 end 까지 1씩 증가하는 for 문
    for(let num = start; num <= end; num++) {
        // num 값을 sum 에 누적
        sum += num; // num 값을 sum에 누적
    }

    result1.innerText = sum;
}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기

// const num3 = document.getElementById("inputNumber2-1");
// const num4 = document.getElementById("inputNumber2-2");
// const num5 = document.getElementById("inputNumber2-3");
// // const result2 = document.getElementById("result2");

// function executeFn2() {

//     const v1 = Number(num3.value);
//     const v2 = Number(num4.value);
//     const v3 = Number(num5.value);
//     for(let num = v1; num <= v2; num += v3) {
//         console.log(num);
//     }
// }

function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul 태그

    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제
    // start 부터 end 까지 val 씩 증가
    for (let num = start; num <= end; num += val) {
        ul.innerHTML += `<li>${num}</li>`;
        // ul.innerText += `<li>${num}</li>`;
        // += 누적
    }
}

// 요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력

// 입력 받은 단(2~9) 출력하기

// function executeFn3() {
//     const dan = Number(document.getElementById("input3").value); //input 태그
//     const ul = document.getElementById("result3"); // ul 태그

//     ul.innerHTML = "";
//     if (dan >= 2 && dan <= 9) {
//         for(let num = 1; num <= 9; num ++) {
//             ul.innerHTML += `<li>${dan} x ${num} = ${dan*num}</li>`;
//         }
//     } else {
//         alert("범위에 맞지 않습니다.");
//     }
// }

// 입력 받은 단(2~9) 출력하기
function executeFn3() { // 클릭할 때마다 호출, 안에 코드 실행
    // 입력된 값(단)
    const input = Number(document.getElementById("input3").value);

    // 결과를 출력할 요소 ul 태그
    const ul = document.getElementById("result3");

    // 함수가 호출될 때마다 이전 내용 삭제해주는 역할
    ul.innerHTML = "";

    // 입력 받은 단이 2~9 사이가 아닐 경우
    // "2~9 사이만 입력해주세요" 알림창 띄우기

    if(input < 2 || input > 9) {
        alert("2~9 사이만 입력해 주세요");
        return 값; // 함수를 종료하고 호출한 곳으로 돌아감
                   // 함수 종료 정도로만 인식
                   // 아래 코드 수행하지 않고 호출한 곳으로 되돌아감              
    }

    for(let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${input} x ${num} = ${input * num}</li>`;
    } //innerText로 하면 <li></li>까지 그대로 다 나옴
}

/* 다음 모양 출력하기
12345
12345
12345
12345
*/
function check8() {

    // for (let num = 1; num <= 5; num++) {

    //     for() {

    //     }
    // }

    // 4바퀴 반복하는 for문
    for (let y = 1; y <=4; y++) { // 처음 만남, y=1 , true let=str만남
        // 다음 줄 for x=1, true str=1 증감식 가서 x+1=2 true
        // str=12 ... str=12345 될때까지 종료되고
        // console에 12345 출력
        // 안쪽 끝나고 바깥쪽으로 가 y=2가 되고
        // x 또 반복 "12345" 1쌓이고 2쌓이고... 5까지 쌓이고
        // console 12345 출력... y가 불충족할때까지
        // y 4일 때까지 12345 4번 쌓임

        // "12345" 출력하는 구문
        let str = "";
        for(let x = 1; x <= 5; x++) {
            str += x;
        }
        console.log(str);
    }
}

// function check9() {
//     for (let y = 1; y <= 1; y++) {

//         let str = "";
//         for(let x = 1; x <= 5; x++) {
//             str += x;
            
//             console.log(str);
//         }
//     }
// }

/*
1
12
123
1234
12345
*/

function check9() {
    for(let y = 1; y <= 5; y++) { // 1~5

        let str = "";
        for(let x = 1; x <= y; x++) { //현재 y값까지
            str += x;
        }
        console.log(str);
    }
}

// while 문 확인
function check16() {
    // prompt(); // 입력창 있는 위에 뜨는 창
    
    // 변수를 선언만 해두기
    let val; // undefined

    // 취소를 누르기 전까지 반복
    // == 취소를 누르면 반복하지 않겠다
    while(val !== null) { // val이 null이 아니라면
        // val 처음에는 undefined null과 다름, true
        // 안에 있는 거 반복 창 뜸
        // 값 입력 후 확인 누르면
        // val에는 입력한 값이 들어옴 console 출력
        // 다시 위로 올라가서 무한 반복
        // 취소 누르면 val = null 값이랑 자료형이 같아짐
        // 그럼 조건식 !== false -> console에 null이 뜸
        // 다시 위로 올라가면 val = null이어서 실행 x 
        // 동일 비교 연산자
        // A != B 값이 다른 경우
        // !== -> 값, 자료형이 모두 다른 경우 true
        // === -> 값, 자료형이 모두 같은 경우 true

        // prompt("") 창에 뜰 내용
        val = prompt("입력 후 확인"); // 변수에 prompt값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);
    }
}

// 메뉴 주문하기

function check17() {
    
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkaseu = 5000;

    // 주문 개수 카운트
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스

    // prompt로 입력할 값을 저장할 변수 선언
    let input; // undefined

    // 확인 -> 입력한 값
    // 취소 -> null


    while(input !== null) { // 취소 누르기 전까지 반복
        // input이 null이 되면 조건식 false라서 나가짐
        input = prompt("메뉴 번호를 입력하세요!");

        switch(input) { // input 값에 따라 달라지도록
            case "1" :gCount++; break;
            case "2" :rCount++; break;
            case "3" :dCount++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요"); break;
        }
    }

    alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkaseu);
    alert(`총 가격 : ${sum}원`); // 다음 창에 뜸
}

function check18() {

    // 1부터 10까지 출력

    let num = 1; // 초기식
    while( num < 11 ) { // 조건식
        console.log(num);

        num++; // 증감식
    }

    console.log("----------")

    // 10부터 1까지 1씩 감소 (while)

    let x = 10;
    while( x > 0 ) {
        console.log(x);

        x--;
    }
}