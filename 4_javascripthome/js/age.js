let currentYear = 2024;
let birthYear; // 태어난 연도
let age; // 저장할 나이
// const body = document.getElementsByTagName("body");
// const input = document.createElement("div"); // <div></div>

birthYear = prompt("태어난 연도를 입력하세요. (YYYY)",""); // ""빈 문자열 생성
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세입니다.");