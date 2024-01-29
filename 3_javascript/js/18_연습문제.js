// 요소 가져오기
// const display = document.getElementById("display");
// function btn(value) {
//     display = '';
//     display.value += Number(value);
// }




// i를 배열이라고 할 때 i + 1 결과가 input에 들어가게
// i가 8보다 작을 때까지만

// const btn = document.querySelectorAll('.numbers');
const display = document.querySelector('input');

function btn(num) {
    
    console.log(num);
    display.value += num;
}
const con2 = document.getElementById("con2");
console.log(con2);
const addBtn = document.getElementById("addBtn");
// const box = document.getElementsByClassName("box");
addBtn.addEventListener("click", () => {
    const div = document.createElement("div")
    div.classList.add("border");
    const box = document.createElement("div"); // <div></div>
    box.classList.add("list");
    box.innerHTML = (display.value); // value 넣어줘야 됨!!!
    const star = document.createElement("span")
    star.classList.add("star"); // star class
    star.innerHTML = "★";
    const cancel = document.createElement("span")
    cancel.innerHTML = "&times;";
    div.append(box, star, cancel);
    con2.append(div);
    display.value = '';

    
    star.addEventListener("click", () => {
    //     const starColor = star.style.color;
    star.style.color = "yellow";
    //     if (starColor == "yellow") {
    //         btn.style.color = "black";
    //     } else {
    //         btn.style.color = "yellow";
    //     }
    })



    cancel.addEventListener("click",() => {
        div.remove();
    })
});

removeBtn.addEventListener("click", () => {
    display.value = '';
});

// 별 노란색이 잘 안보임 노란색일 때 누르면 검정으로 돌리는 법