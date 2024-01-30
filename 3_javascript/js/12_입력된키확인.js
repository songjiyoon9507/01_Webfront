// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

const key = document.querySelectorAll(".key");
console.log(key);
key[0].innerText.toLowerCase();
key[1].innerText.toLowerCase();
key[2].innerText.toLowerCase();
key[3].innerText.toLowerCase();
// console.log(key[0].innerText.toLowerCase());
// window도 됨
document.addEventListener("keydown",function (e) {
    console.log(e);
    if (e.key == "q") {
        key[0].style.backgroundColor="green";
    }
});

document.addEventListener("keyup",function (e) {
    console.log(e);
    if (e.key == "q") {
        key[0].style.backgroundColor="white";
    }
});

document.addEventListener("keydown",function (e) {
    console.log(e);
    if (e.key == "w") {
        key[1].style.backgroundColor="green";
    }
});

document.addEventListener("keyup",function (e) {
    console.log(e);
    if (e.key == "w") {
        key[1].style.backgroundColor="white";
    }
});
document.addEventListener("keydown",function (e) {
    console.log(e);
    if (e.key == "e") {
        key[2].style.backgroundColor="green";
    }
});

document.addEventListener("keyup",function (e) {
    console.log(e);
    if (e.key == "e") {
        key[2].style.backgroundColor="white";
    }
});
document.addEventListener("keydown",function (e) {
    console.log(e);
    if (e.key == "r") {
        key[3].style.backgroundColor="green";
    }
});

document.addEventListener("keyup",function (e) {
    console.log(e);
    if (e.key == "r") {
        key[3].style.backgroundColor="white";
    }
});

// 화면에 존재하는 key 모두 얻어오기
// const keys = document.querySelectorAll(".key");


// // 문서(화면 전체)에서 키가 눌러지는걸 감지했을 때
// document.addEventListener("keydown", function(e) {
// // 매개 변수 e 이벤트 객체 이벤트 관련 정보 모두 담겨있음
// // key 입력된 키를 반환해줌
//     let idx; // 인덱스 값을 저장할 변수

//     switch(e.key.toLowerCase()) { // e.key가 어떤 경우인지에 따라
//         // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
//         case 'q' : idx = 0; break;
//         case 'w' : idx = 1; break;
//         case 'e' : idx = 2; break;
//         case 'r' : idx = 3; break;
//         default : return; // 함수 종료
//     }

//     // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
//     key[idx].style.backgroundColor = "pink";
// });

// // 키를 떼면 배경색 흰색으로 되돌리기
// document.addEventListener("keyup", function() {

//     let idx; // 인덱스 값을 저장할 변수

//     switch(e.key.toLowerCase()) { // e.key가 어떤 경우인지에 따라
//         // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
//         case 'q' : idx = 0; break;
//         case 'w' : idx = 1; break;
//         case 'e' : idx = 2; break;
//         case 'r' : idx = 3; break;
//         default : return; // 함수 종료
//     }

//     // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
//     key[idx].style.backgroundColor = "white";

// });