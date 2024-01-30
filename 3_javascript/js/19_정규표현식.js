// 정규 표현식 객체 생성 + 확인하기
document.getElementById("btn1").addEventListener("click", () => {

    // 정규표현식 객체 생성
    const regExp1 = new RegExp("script");
                    // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식
    // 방법이 2가지 둘 다 똑같은 표현
    const regExp2 = /java/;
    // 문자열 "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page)도 나중에 할겁니다";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));
    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));
});

// 메타문자 확인하기
document.getElementById("btn2").addEventListener("click", () => {
    const div1 = document.getElementById("div1");

    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>"; // false
    
    // [abcd] : 문자열 내에 a,b,c,d 중에 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[a,b,c,d]/;
    div1.innerHTML += "/[a,b,c,d]/, apple : " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[a,b,c,d]/, ssssssbbb : " + regExp2.test("ssssssbbb") + "<hr>"; // true
    div1.innerHTML += "/[a,b,c,d]/, qwerty : " + regExp2.test("qwerty") + "<hr>"; // false
    
    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>"; // false

    // $ (달러) : 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 group인지 확인
    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>"; // true
    
});

// 이름 유효성 검사하기
document.getElementById("inputName").addEventListener("keyup", (e) => {
    // 화살표 함수 안에서는 this가 이벤트 함수가 아님
    // 그래서 this 넣으면 안됨 e.target
    // function 함수에서 this는 이벤트 함수 맞음

    // 화살표 함수의 this
    // 화살표 함수의 this는 상위(부모) 스코프 값이 상속된다.

    // 이벤트 핸들러 내 일반 function : this
    // 이벤트가 일어난 객체

    // 결과 출력용 span 얻어오기
    const span = document.getElementById("inputNameResult");

    // 한글 2~5글자 정규표현식 객체 만들기 (시작과 끝이 한글로 이루어진 문자 ^$)
    const regExp = /^[ㄱ-힣]{2,5}$/;
    
    // 빈칸인지 검사
    if (e.target.value.length == 0) {
        span.innerText = "";
        return;
    }

    // 유효성 검사
    if (regExp.test(e.target.value)) { // input창에 사용자가 넣은 값
        // 유효한 경우
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else {
        // 유효하지 않은 경우
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});

// 주민등록번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", (e) => {
    const span = document.getElementById("inputPnoResult");

    if (e.target.value.length == 0) {
        span.innerText="주민등록번호를 작성해주세요";

        span.classList.remove("confirm");
        span.classList.remove("error");

        return;
    }

    // 생년월일(6)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(e.target.value)) {
        span.innerText = "유효한 주민등록번호 형식입니다.";

        span.classList.remove("error");
        span.classList.add("confirm");
    } else {
        span.innerText = "유효하지 않습니다.";

        span.classList.add("error");
        span.classList.remove("confirm");
    }
});

// input 값 가져오기
const id = document.getElementById("id");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const Name = document.getElementById("name");
const mobile = document.getElementById("mobile");
const email = document.getElementById("email");

const resetBtn = document.getElementById("resetBtn");
const singUp = document.getElementById("signUp");

id.addEventListener("keyup", (e) => {
    // id 정규표현식
    const regExp1 = /^[a-z][a-zA-Z0-9\-\_]{5,13}$/;
    if(e.target.value.length == 0) {
        id.innerText="";
        return;
    }
    if(regExp1.test(e.target.value)) {
        id.style.backgroundColor = "springgreen";
    } else {
        id.style.backgroundColor = "";
    }
});

// 비밀번호

// 문장 추가로 문제 해결
password.addEventListener("keyup", () => {
    const correct = document.getElementById("Correct");
    if (passwordCheck.value.length == 0) {
        correct.innerText = "";
    } else if(password.value == passwordCheck.value) {
        correct.innerText = "비밀번호 일치";
        correct.style.color = "green";
    } else {
        correct.innerText = "비밀번호 불일치";
        correct.style.color = "red";
    }
})

passwordCheck.addEventListener("keyup", () => { // 비밀번호 확인에 값이 들어갔을 때 변하는 거니까 event를 여기에 줌
    // 비밀번호 입력 안한 상태에서 비밀번호 확인에 입력했을 때
    // 비밀번호 확인 모두 삭제하고 비밀번호를 입력해주세요
    const correct = document.getElementById("Correct");

    if(password.value.length == 0 && passwordCheck.value.length != 0) {
        alert("비밀번호를 입력해주세요");
        passwordCheck.value = "";
        password.focus();
    } else if (password.value == passwordCheck.value) {
        correct.innerText = "비밀번호 일치";
        correct.style.color = "green";
    } else {
        correct.innerText = "비밀번호 불일치";
        correct.style.color = "red";
    }
    // 문제점 keyup event를 확인창에 넣어서 비밀번호 일치 후 위에 비밀번호 바꿔도 일치로 뜸
})
// 문장 추가 후에도 문제 발생 둘 다 작성했다 둘 다 지우면 일치로 뜸
// 둘 문장 순서 바꿔서 해결

// 이름 name에 keyup 이벤트
Name.addEventListener("keyup", (e) => {
    const correctName = document.getElementById("correctName");
    const regExp =  /^[가-힣]{2,5}$/;
    if (regExp.test(e.target.value)) {
        correctName.innerText = "정상입력";
        correctName.style.color = "green";
    } else {
        correctName.innerText = "한글만 입력하세요";
        correctName.style.color = "red";
    }
})

// 회원가입 버튼 클릭 시 validate() 함수 호출

singUp.addEventListener("onclick", () => {
    
})