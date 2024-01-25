/* 인라인 이벤트 모델 확인 */
function check1(btn) { // 매개변수로 받는 변수 있어야함
    //this라는 전달인자 있음
    console.log(btn);
    //button 태그 전체
    //<button onclick="check1(this)" style="background-color: yellow;">인라인 이벤트 모델 확인</button>
    //요소 자체가 반환됨

    // 매개변수 btn == 클릭한 버튼(this)
    // 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;
    // yellow 출력됨
    console.log(bgColor);
    // this 통해서 button 요소 자체를 얻어왔음 이미

    // 버튼이 클릭 될 때마다 pink <-> yellow 변경
    // 버튼이 클릭 될 때마다 check1 호출하는 것

    if (bgColor == "yellow") {
        btn.style.backgroundColor = "pink";
    } else { // backgroundColor가 pink이면
        btn.style.backgroundColor = "yellow";
    }
}

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");
// 요소 직접 얻어온 것

// 고전 이벤트 모델 작성법

// 요소.이벤트리스너 = 이벤트헨들러

test1a.onclick = function() { // 이벤트 핸들러는 익명함수로 채워줌
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

// 고전 이벤트 모델 제거하기
// #test1-2 버튼 클릭 시
// #test1-1 의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기

// 위에는 변수에 요소 저장하고 함수 넣었는데 한줄로 줄여서 쓸 수 있음
document.querySelector("#test1-2").onclick = function() {
    // 기존 onclick의 이벤트 핸들러를
    // null 로 덮어씌움 (이벤트 제거)
    document.querySelector("#test1-1").onclick = null;
    // null 대입해서 바꿔버림
    alert("이벤트 제거됨");
}

// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

// #test1-3 요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick = function() {
    test1c.style.backgroundColor = "red";
}

// 6개월 후 바꾼 걸 까먹고
// #test1-3이 클릭 되었을 때 글자색을 "white"로 변경하려고함
test1c.onclick = function() {
    test1c.style.color = "white";
} // 실행하면 배경색 날아감
// -> onclick에 저장된 값이 덮어씌워지면서
// 이전 코드 (배경색 red)가 사라지는 문제 발생

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트 종류", 이벤트 헨들러(함수));

test2.addEventListener("click",function() {
    // 투명도 1 (불투명) -> 0(투명) 0.1씩 감소

    // 현재 #test2 의 투명도 확인
    let curr = test2.style.opacity;

    // 맨처음에는 투명도 '' -> 1대입 빈값으로 나옴
    if(curr == '') {
        test2.style.opacity = 1;
        curr = 1;
    }

    // 투명도 0.1 감소
    test2.style.opacity = curr - 0.1;

    if(test2.style.opacity == 0) { //완전 투명해졌다면
        test2.style.opacity = 1; // 다시 불투명하게
    }
});

// #test2 요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function() {
    count++; // 카운트 1 증가

    // 표준 이벤트 모델의 이벤트 핸들러 안에서 this란
    // == 이벤트가 발생한 요소
    this.innerText = count; //this가 test2를 의미
});

// const text = document.getElementById("#input3");
// input 요소 가져오기

// document.querySelector("#input3").addEventListener("keyup",function(){

// })

// box3 과 input3 구해와야함
const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");

// input 창에서 키보드 enter 이벤트
// 키업 이벤트를 추가하겠다
input3.addEventListener("keyup", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // 굉장히 자주 씀 기억해야함
    // console.log(e);
    // 키 누르면 console에 뭐 눌렀는지 다 뜸
    // e.key : 현재 입력된 키

    if(e.key == "Enter") {
        box3.style.backgroundColor = input3.value;
    }
});

// #box3를 클릭하면 현재 배경색을 alert로 출력
// box3.addEventListener("click", function() {
//     // 클릭 이벤트를 추가하겠다
//     alert(`배경색 : ${box3.style.backgroundColor}`);
// });

box3.addEventListener("click", function(e) {
    // e : 이벤트 객체
    // 엄청 여러개 뜸
    console.log(e);
    // e.target : 이벤트가 발생한 대상 요소 (이벤트 발생 요소)

    alert(`배경색 : ${e.target.style.backgroundColor}`);
});