// break 확인
function check1() {

    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++) {
        console.log("i :", i);

        if(i == 5) break;
        // {break;} 코드 한 줄이면 위처럼 중괄호 생략
    }
}

// 무한 반복하는 while 문 멈추기
function check2() {

    let i = 1;
    // 10 초과 시 멈춤
    while(true) { // 무한 반복 만드는 while문
        // true 일 때 반복 수행하는 코드
        console.log("i :", i++);
        
        if(i > 10) break;
        // 가장 가까운 반복문 종료 while문 종료
    }
}

// countinue 확인하기
function check3() {

    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i <= 20; i++) {
        
        // 3의 배수인 경우
        if(i % 3 == 0) continue;
        // i가 3의 배수이면 아래 코드 수행 x (console을 건너뜀)
        // break; 이면 1,2 까지만 출력
        // 3 만나자마자 빠져나감 출력 안됨

        console.log("i :",i);
    }
}

/* 1부터 30까지 1씩 증가하며 출력
    단, 홀수 또는 10의 배수는 건너뛰기
*/
function check4() {
    for(let i = 1; i <= 30; i++) {

        if(i % 2 == 1 || i % 10 == 0) continue;

        console.log("i :",i);
    }    
}

/* 0~9까지 5줄 출력
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기

  012356789
  012356789
  012356789
*/
// function check5() { // 숫자가 안 나옴
//     for(let i = 1; i <= 3; i++) {
//         let str = "";
//         for(let x = 0; x <= 9; x++) {
            
//             if(str % 4 == 0) continue;
//             str += x;
//         }
//         console.log(str);     
//     }
// } // 4의 배수도 나옴

function check5() {

    for(let row=1; row <= 5; row++) { // 5줄 출력
        let str = "";
        for(let col=0; col<=9; col++) {
            // 0을 제외한 4의 배수인 경우
            if(col != 0 && col % 4 == 0) continue;

            str += col;
        }

        console.log(str);

        // 3번째 줄 출력후 멈춤
        if(row == 3) break;
    }
}

// up/down game
function startGame() {
    const rN = Math.floor(Math.random() * 100 + 1);
    let input;
    
    
    let count = 0;
    while (input !== null) {
        console.log(input);
        count++;
        // input이 null이 아닐 경우 true 계속됨
        // 아무것도 없을 때
        input = prompt("1~100 사이의 수를 입력해주세요");
            if (input == null){
                alert("숫자를 입력해주세요");
            }
            if(rN > input) { // if문에 조건문 만족하면 빠져나감
                
                alert(`up 도전횟수 : ${count}회`);
            } else if (rN < input) {
                
                alert(`down 도전횟수 : ${count}회`);
            } else {
                
                alert(`정답입니다. 도전횟수 : ${count}회`);
                break;
            }
        }
   
    
}