// 사과가 체크됐을 때 input값 가져와서 value * 2000원/ 3000원/ 5000원

// input에 입력된 값 * 체크 됐을 때 2000dnjs 가져와서 둘이 곱하기 체크 됐을 때 변하지 않는 값
// count 버튼 누르면 가져온 값 곱하기해서
// 체크 박스 값 가져오기
const apple = document.getElementById("apple");
const banana = document.getElementById("banana");
const melon = document.getElementById("melon");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
// 가격들 합계

// 체크 됐을 때 가져올 값 들어있는 input 가져오기
// input type=number로 모두 같음 배열로 가져오기
// input 값에 들어온 거라 str으로 인식됨 .value 입력
const number = document.querySelectorAll("input[type='number']");

// console.log(number);

// input checked 됐을 때 number * 가격

btn.addEventListener("click", () => {
    let totalPrice = 0;

    if (apple.checked) { // 사과
        totalPrice += (number[0].value)*2000;
        result.innerHTML += `사과 ${(number[0].value)}개&nbsp;`
    }
    
    if (banana.checked) { // 바나나
        totalPrice += (number[1].value)*3000;
        result.innerHTML += `바나나 ${(number[1].value)}개&nbsp;`
    }
    
    if (melon.checked) { // 메론
        totalPrice += (number[2].value)*5000;
        result.innerHTML += `메론 ${(number[2].value)}개&nbsp;`
    }
    // console.log(totalPrice);
    result.innerHTML += `총합 ${totalPrice}원`;
})