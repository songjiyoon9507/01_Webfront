// 값 가져오기
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const fontSizeInput = document.getElementById("fontSize");
const fontColorInput = document.getElementById("fontColor");
const bgcInput = document.getElementById("bgc");
const printInput = document.getElementById("print");

const applyBtn = document.getElementById("applyBtn");

const resultContainer = document.getElementById("result"); // 담을 박스
const result = document.createElement("div"); // 모든 값이 들어가서 만들어질 곳

applyBtn.addEventListener("click", function() {

    result.innerHTML = '';

    const width = widthInput.value;
    const height = heightInput.value;
    const fontSize = fontSizeInput.value;
    const fontWeight = document.querySelector('input[name="fontWeight"]:checked').value;
    const fontColor = fontColorInput.value;
    const bgc = bgcInput.value;
    const row = document.querySelector('input[name="row"]:checked').value;
    const col = document.querySelector('input[name="col"]:checked').value;
    let print = printInput.value;

    result.style.width = `${width}px`;
    result.style.height = `${height}px`;
    result.style.fontSize = `${fontSize}px`;
    result.style.fontWeight = fontWeight;
    result.style.color = fontColor;
    result.style.backgroundColor = bgc;
    result.style.justifyContent = row;
    result.style.alignItems = col;

    // 문자열 출력
    
    const text = document.createElement("p"); // p 태그 만들기
    text.innerText = print;
    result.append(text);

    resultContainer.append(result);
});

//getElementsByClassName 은 배열 선택됨 하나만 가져올때는 id로