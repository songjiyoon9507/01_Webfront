// const img = document.querySelectorAll("img");
// const span = document.querySelector("span");
// let x = 0;
// let y = 0;
// const move = 5;
// const boom = document.getElementById("#boom");
// document.addEventListener("keydown",function(e) {
//     console.log(e);
//     switch(e.key) {
//         case 'ArrowUp' : y -= move;
//         break;
//         case 'ArrowDown' : y += move;
//         break;
//         case 'ArrowLeft' : x -= move;
//         break;
//         case 'ArrowRight' : x += move;
//         break;
//         default : return;
//     }
    
//     span.style.top = y + 'px';
//     span.style.left = x + 'px';

// });

let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// addEventListener( "이벤트종류", 함수(이벤트가 발생했을 때 수행할 기능) )
// 전달인자 2개
document.addEventListener("keydown", function(e) {
    // e : 이벤트 객체
    const bomberman = document.getElementById("bomberman");
    // #없어도 됨 id 앞에
    switch(e.key) {
        case 'ArrowUp' : yindex -= 10;
        break;
        case 'ArrowDown' : yindex += 10;
        break;
        case 'ArrowLeft' : xindex -= 10;
        break;
        case 'ArrowRight' : xindex += 10;
        break;
        case 'x' :
            const box = document.getElementById("box");
            box.innerHTML += `<img src="../../images/boom.png"
            style="transform: translate3d(${xindex}px,${yindex}px, 0); position : absolute;">`;
            break;
        default : alert("방향키와 x만 가능"); break;
    }

    bomberman.style.transform = `translate3d(${xindex}px,${yindex}px, 0)`;

});