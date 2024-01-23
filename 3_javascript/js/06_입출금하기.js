// prompt 사용 연습
function test() {

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) { // 취소
        alert("취소");
    } else { // 확인
        
        if(password == '1234') {
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치");
        }
    }
}

const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수 (초기값 10000)
const password = '1234'; // 비밀번호 저장 변수 (초기 비밀번호 1234)

output.innerText = balance; // 초기 금액 설정

// 입금
function deposit() {
    // 입금 버튼 클릭
    // input에 입력된 금액 구하기
    // 구한 금액을 잔액(balance)에 추가하기
    // const money = Number(amount.value);
    // balance += money;
    
    // output.innerText = balance;

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요.");
    } else {
        balance += Number(amount.value);
        output.innerText = balance;

        amount.value = '';
        // 금액창 비우기
    }
}

// 출금
function withdrawal() {
    // const money = Number(amount.value);
    

    // const password = prompt("비밀번호를 입력하세요.");

    // if(password == '1234') {
        
    //     if(balance < money) {
    //         alert("출금 금액이 잔액보다 클 수 없습니다.");
    //     } else {
    //         balance -= money;
    //         alert(`${money}원이 출금 되었습니다. 남은 잔액 :${balance}원`);
    //     }
    // } else {
    //     alert("비밀번호가 일치하지 않습니다.");
    // }

    // if (password != '1234') {
    //     alert("비밀번호가 일치하지 않습니다.");
    // } else if (password == '1234' && balance >= money) {
    //     balance -= money;
    //     alert(`${money}원이 출금 되었습니다. 남은 잔액 :${balance}원`);
    // } else {
    //     alert("출금 금액이 잔액보다 클 수 없습니다.");
    // }

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요");
    } else {
        const password = prompt("비밀번호를 입력하세요");

        if(password == null) {
            alert("취소");
        } else {
            // 비밀번호가 일치하지 않을 경우
            if(password != '1234') {
                alert("비밀번호가 일치하지 않습니다.");
            } else { // 비밀번호가 일치하는 경우
                const money = Number(amount.value);

                // 출금 금액이 잔액보다 큰 경우
                if(money > balance) {
                    alert("출금 금액이 잔액보다 클 수 없습니다.");
                } else {
                    balance -= money;
                    output.innerText = balance;
                    amount.value = ''; // input에 작성된 값 제거
                    alert(`${money}원이 출금 되었습니다. 남은 잔액 :${balance}원`);
                }
            }
        }
    }

    output.innerText = balance;
}