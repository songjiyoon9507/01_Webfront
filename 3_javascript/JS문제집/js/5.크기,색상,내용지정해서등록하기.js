const size = document.getElementById("size");
const color = document.getElementById("color");
const content = document.getElementById("content");

// 버튼
const apply = document.getElementById("apply");
const registration = document.getElementById("registration");

const result = document.getElementById("result");

apply.addEventListener("click", () => {
    result.style.fontSize = `${size.value}px`
    result.style.color = color.value;
})

registration.addEventListener("click", () => {
    result.innerText = content.value;
})