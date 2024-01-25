// const text = document.querySelectorAll(".color-input");
// const box = document.querySelectorAll(".box");

// document.querySelector("#changeButton").addEventListener("click",function() {
//     box[0].style.backgroundColor = text[0].value;
//     box[1].style.backgroundColor = text[1].value;
//     box[2].style.backgroundColor = text[2].value;
//     box[3].style.backgroundColor = text[3].value;
//     box[4].style.backgroundColor = text[4].value;
// }); // 출력 안됨

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function() {

    for(let i = 0; i<boxList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});