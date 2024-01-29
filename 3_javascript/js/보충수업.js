const name = document.getElementById("name");

function generateWelcomeMessage() {
    alert(`안녕하세요 ${name.value}님`);
}

let numbers = [1,2,3,4,5]; // 숫자로 이뤄진 배열 생성
console.log(numbers);
// ul 태그 안에 li 태그 넣기
// li태그 안에 배열 
const ul = document.getElementById("ulTag");

// ul.innerHTML += `<li>${numbers[0]*2}</li>`;
// ul.innerHTML += `<li>${numbers[1]*2}</li>`;
// ul.innerHTML += `<li>${numbers[2]*2}</li>`;
// ul.innerHTML += `<li>${numbers[3]*2}</li>`;
// ul.innerHTML += `<li>${numbers[4]*2}</li>`;

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

// 결과를 화면에 출력
for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.innerText = numbers[i];

    ul.append(li);
}


// 가져오기
const tagName = document.getElementById("tagName");
const tagInnerText = document.getElementById("tagInnerText");
const colorName = document.getElementById("colorName");

document.getElementById("btn1").addEventListener("click", () => {
    const result = document.getElementById("result");
    result.innerHTML = "";
    const box = document.createElement(tagName.value);
    // 태그를 만들어서 section에 넣기
    // 만들어진 태그 안에 쓸 내용 넣기
    // color 만들기
    box.innerText = tagInnerText.value;
    box.style.color = colorName.value;
    
    result.append(box);
});
// 자꾸 쌓여요...

// 짝수 홀수 구하기
const numberInput = document.getElementById("numberInput");

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    
    numberInput.value = "";
    if (numberInput.value.lenght == 0) { //아무것도 입력 안함
        alert("숫자를 입력해주세요");
    } else if (numberInput.value%2 == 0) { // 짝수일 때
        alert("짝수입니다.");
    } else {
        alert("홀수입니다.");
    }
});