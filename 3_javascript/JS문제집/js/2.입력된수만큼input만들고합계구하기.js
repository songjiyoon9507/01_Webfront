// input에 들어오는 숫자만큼 input태그 생성하기
// 생성 버튼 누르면 생성됨
// input 값 가져오기
const result = document.getElementById("result");
const input = document.querySelector("input"); // 태그값만 넣어서 가져올 수 있음
// console.log(input);
const container = document.getElementById("container");
document.getElementById("btn").addEventListener("click", () => {
    result.innerHTML=""; // 버튼 밖에 두면 호출이 안돼서 초기화가 안됨
    // 버튼 클릭 시 결과 span 태그 안에 input 태그 생성하기
    // 정해진 개수만큼 뭘 해야한다면 for 문 let i 생각하기
    container.innerHTML = ''; // 안 넣으면 btn 클릭했을 때 계속 늘어남
    for( let i = 0; i < input.value; i++) { // input.innerText.value하면 v에 밑줄
        
        const box = document.createElement("input"); // <input>
        box.setAttribute("type","number");
        box.classList.add("input-number");
        // box *= input.innerText;
        // for문 넣어줘야함
        container.append(box);
    }
})

// input 안에 입력된 수 모두 더하기
// 생성한 input 요소 가져오기
const inputSum = document.getElementsByClassName("input-number");


document.getElementById("sumBtn").addEventListener("click", () => {
    let sum = 0; // 밖에 나가면 계속 더해짐 안에 넣어놔야함
    inputSum.innerText = '';
    // 클릭했을 때 인풋 안에 있는 것들이 다 더해져야함
    // inputSum이 5개 만들어 졌을 때 inputSum[0]~[4]까지 더해야함
    for (let i = 0; i < input.value ; i++) {
        // inputSum의 i 번째 수
        sum += Number(inputSum[i].value); // input 넣어서 안됐음
    }
    console.log(sum);
    // 결과가 result에 뜨도록
    result.innerText = sum;
    input.value = ''; // 순서 위로 가면 i 값이 달라져서 여기에 둬야함
})