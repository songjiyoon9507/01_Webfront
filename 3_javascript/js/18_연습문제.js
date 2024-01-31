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
    // star.innerHTML = "★";
    star.innerHTML = "<i class='fa-solid fa-star'></i>"; // id 넣어주기
    // document.querySelector("#icon").style.border = "1px solid black"; 에러뜸
    // const icon = document.getElementById("icon");
    // console.log(icon);
    // icon.style.border = "1px solid black";
    // star.style.border = "1px solid black"; // border 넣는 법
    const cancel = document.createElement("span")
    cancel.innerHTML = "&times;";
    div.append(box, star, cancel);
    con2.append(div);
    display.value = '';

    // 짝수번 눌렀을 때 검정색
    // 홀수번 눌렀을 때 노란색
    let count = 0; // 초기화식 (초기화식 밖으로 꺼내야함)
    star.addEventListener("click", () => {
        // const starColor = star.style.color;
        count++;
        console.log(count);
        if (count % 2 == 1) { // 홀수일때

            star.style.color = "rgb(254, 234, 51)";
        } else {
            star.style.color = "black";
        }
        // if (star.style.color.innerText == "yellow") {
            //  star.style.color = "black";
        // } else {
            // star.style.color = "yellow";
        // }
        // console.log(star.style.color) yellow
        // 노란색일 때 누르면 검정색으로 돌아오게 만들고싶음..
    })

    cancel.addEventListener("click",() => {
        div.remove();
    })
});

removeBtn.addEventListener("click", () => {
    display.value = '';
});

// 별 노란색이 잘 안보임 노란색일 때 누르면 검정으로 돌리는 법