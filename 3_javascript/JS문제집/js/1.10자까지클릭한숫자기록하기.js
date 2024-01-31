// const container = document.getElementsByClassName("container");
// const container = document.querySelector(".container");
const num = document.querySelectorAll(".number");
const result = document.querySelector("#result");
// const reset = document.getElementById("reset");
const reset = document.querySelector("#reset");

let count = 0; // 글자수 변수

// 배열 가져오기 querySelector
// console.log(container);

// 이벤트 주기
// container.addEventListener("click", function(e) {
//     // 눌렀을 때

//     console.log(e.target.innerText); // 타겟팅 된 것의 innertext
    
//     for (let i = 0; i < num.length ; i++) {
//         // i 배열

//         // 글자수 11보다 작으면서
//         if (count < 11 && num[i] == Number(e.target.innerText)) {
//             count++;
//             result.innerText += e.target.innerText;
//         } else if (count > 10) {
//             alert("10개 까지 입력");
//         }
//     }
// });

// reset.addEventListener("click", () => {
//     result.innerText = '';
//     count = 0;
// });

// if (count < 11 && num[i] == Number(e.target.innerText)) {
// } else 
// for문 안에 또 for문 넣어서 이상하게 나옴
console.log(num);
console.log(num[0].innerText);

for(let i = 0; i < num.length; i++) {
    //console.log(i);
    num[i].addEventListener("click", (e) => {
        console.log(e.target.innerText);
        count++;

        if(count > 10) {
            alert("10개 까지 입력");
            result.innerText = "";
            count = 0;
            return; // 현재 수행중인 함수 종료 호출한 곳으로 돌아감  
        }
        result.innerText += e.target.innerText;
        // for (let i = 0; i < num.length ; i++) {
            
        //     if (count < 11 && num[i] == Number(e.target.innerText)) {
                
        //     } else if (count > 10) {    
        //         result.innerText = "";
        //         alert("10개 까지 입력");
        //         count = 0;
        //     }
        //     result.innerText += e.target.innerText;
        // }    
    });
}

reset.addEventListener("click", () => {
    result.innerText = '';
    count = 0;
});

// for(let n of num) {
//     n.addEventListener("click", (e) => {
//         console.log(e.target.innerText);
//     });
// }