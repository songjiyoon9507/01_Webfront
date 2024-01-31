// input에 들어오는 숫자만큼 input태그 생성하기
// 생성 버튼 누르면 생성됨
// input 값 가져오기
const result = document.getElementById("result");
const input = document.querySelector("input"); // 태그값만 넣어서 가져올 수 있음
// input 안에 작성된 값 몇개 는 value로 표시할 수 있음
const container = document.getElementById("container");
document.getElementById("btn").addEventListener("click", () => {
    result.innerHTML=""; // 버튼 밖에 두면 호출이 안돼서 초기화가 안됨
    // 버튼 클릭 시 결과 span 태그 안에 input 태그 생성하기
    // 정해진 개수만큼 뭘 해야한다면 for 문 let i 생각하기
    container.innerHTML = ''; // 안 넣으면 btn 클릭했을 때 계속 늘어남
    for( let i = 0; i < input.value; i++) { // input.innerText.value하면 v에 밑줄
        // innerText가 없음 console 찍어보면 나옴
        const box = document.createElement("input"); // <input>
        box.setAttribute("type","number");
        box.classList.add("input-number");
        // box *= input.innerText;
        // for문 넣어줘야함
        container.append(box);
    }
    // input.value=''; // 생성 버튼 누르면 입력한 개수 초기화
    // 여기서 input.value를 초기화 시키면 아래 버튼 눌러서 계산하는 도중
    // input.value로 i에 들어갈 값 정해야하는데 계산해야하는데 못함
    console.log(input.value);
})

// input 안에 입력된 수 모두 더하기
// 생성한 input 요소 가져오기
const inputSum = document.getElementsByClassName("input-number");
// container 안에 생성된 box들을 변수로 지정
// inputSum에 들어간 숫자들을 모두 더해야함

document.getElementById("sumBtn").addEventListener("click", () => {
    // 아래 입력된 숫자 모두 더하기 버튼 눌렸을 때 해야할 일
    // inputSum 안에 값들이 모두 더해져서 결과 result창에 출력되고 입력된 숫자, 생성했던 input창 모두 없애기
    let sum = 0; // 밖에 나가면 계속 더해짐 안에 넣어놔야함
    // let sum = ''; 이렇게 만들면 sum 자료형이 str으로 돼서 숫자를 차곡차곡 문자열로 더함
    // 모두 더할 때 필요한 누적될 곳 변수로 만들어줌 sum
    // 클릭했을 때 인풋 안에 있는 것들이 다 더해져야함
    // inputSum이 5개 만들어 졌을 때 inputSum[0]~[4]까지 더해야함
    for (let i = 0; i < input.value ; i++) { // 어디서부터 어디까지 더해라 for문 시작
        // inputSum의 i 번째 수
        sum += Number(inputSum[i].value); // input 넣어서 안됐음
        // input value 값은 str 이기 때문에 더하면 문자열이 더해짐
        // 숫자형으로 변환
        // inputSum console 해보면 input 태그 그 자체를 보여줌 안에 value값 안보임
        console.log(inputSum[0].value);
        console.log(inputSum[1].value);
        console.log(inputSum[2].value);
    }
    // console.log(input.innerText);
    // 결과가 result에 뜨도록
    console.log(sum);
    result.innerText = sum;
    // console.log(inputSum);
    // inputSum[i].innerHTML = '';
    container.innerHTML=''; // container 자체를 없애줌 생성한 네모 박스 사라짐
    input.value = ''; // 생성할 input 개수 입력한 곳 value 비워줌
    // input.value = ''; // 순서 위로 가면 i 값이 달라져서 여기에 둬야함
    // 결과값이 나온 후에 생성할 input 개수 입력한 곳 input.value
    // 생성된 input inputSum[i].value를 초기화 시켜주고싶음
    // -> container 초기화 시켜주면 박스 다 사라짐
})