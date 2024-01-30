const add = document.querySelector("#add"); // 추가 버튼
const calc = document.querySelector("#calc"); // 계산 버튼
const container = document.querySelector(".container"); // 컨테이너 박스
// 추가 버튼 기능 함수
add.addEventListener("click", () => {

    // 1. div 생성
    const box = document.createElement("div"); // div 태그
    // console.log(box);

    // 2. div 클래스 row
    box.classList.add("row"); // div class="row"

    // 컨테이너의 마지막 자식으로 div 요소 추가
    container.append(box);

    // 4. input 요소 생성
    const input = document.createElement("input"); // input 태그

    // 5. input type number
    input.type = "number";

    // 6. input class input-number
    input.classList.add("input-number");

    // 생성된 input 을 box의 첫번째 자식으로 추가
    box.prepend(input);

    // span 태그 생성
    const span = document.createElement("span"); // span 태그
    
    // span 태그 안에 class 설정
    span.classList.add("remove-row");

    // box에 span 태그 마지막 자식으로 추가
    box.append(span);
    // span 태그 안에 innerHTML로 &times; 추가
    span.innerHTML="&times;"

    // console.log(span);

    // x 클릭시  input 삭제
    span.addEventListener("click", () => {
        box.remove();
    });
    // span 태그 클릭시 box 삭제 box는 class row랑
    // 연결돼 있는데 이건 왜 혼자만 지워지는지..?
    // 묶음이 잘못돼서 const remove 하면 쿼리가 순서까지 설정
    // 모든 클래스가 묶여서 다 지워짐

    //box.innerHTML += "<span class='remove-row'>&times;</span>"
    
    //const remove = document.querySelector(".remove-row");
    // 이게 잘못됐음
    //remove.addEventListener("click", () => {

        //box.remove();
    //});
}); //  이벤트 타겟 이용

// 계산 버튼 클릭시 모든 input 요소에 작성된 값의 합을
// alert로 출력
// 배열 arr arr<length i++ arr sum alert
// container 안에 row 들이 배열로 나타남

// input 가져오기 num
// 계산 버튼 클릭했을때
calc.addEventListener("click", () => {

    const num = document.getElementsByClassName("input-number"); // 여기에 Number.value 해도 안됨
    console.log(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        
        sum += Number(num[i].value);
    }
    alert(sum);
});