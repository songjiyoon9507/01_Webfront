// .js 파일 내부를 <script> 태그 내부라고 생각하면 됨

function externalFn() {
    alert("외부 파일에 작성된 externalFn() 함수 호출됨");
}


//JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경
// body 태그 요소를 선택해야함

const body = document.querySelector("body");
/* body 태그 선택
    document.querySelector("body");
*/
/* 상수 설정
const body =
body만 치면 됨 
*/

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
    body.style.color = "white"; // 글자색 흰색으로 변경
    // = 오른쪽 값을 왼쪽에 대입 (대입연산자)
    // == 오른쪽 왼쪽이 같다
    body.style.backgroundColor = "black"; //배경색 검정으로 변경
}

/* 실행되면 라이트모드로 바꾸는 함수(기능) */
function lightMode() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
}