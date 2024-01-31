// 로또판 안에 1~45 번까지 만들고
// 6개까지만 눌리고
// 다시 눌렀을 때 버튼 꺼지게
// 1~45 i++ <45
// span 태그로 1~45 넣기
// const maxNum = 45;
// 빈 배열 생성
// const lottoBoard = document.getElementById("lottoBoard");
// 클릭 이벤트
// document.getElementById("createBtn").addEventListener("click", () => {
    // lottoBoard.innerHTML = ''; // 이거 안 넣으면 무한대로 생성됨
    // let count = 0; // 볼 눌린 개수 초기화식 필요 없음
    
    // 클릭 했을 때 1~45 숫자 생성
    // for (let i = 1; i < 46; i++) { // 1~45 수를 넣어야함
        // const ball = document.createElement("div") // <div></div> html css 코드 보면 됨 displayflex가 돼있음
        // ball.style.border = "1px solid black"; // html css 나와있음
        // ball.style.borderRadius = "50%"; html css에 있는 내용
        // ball.style.backgroundColor = "gray";
        // ball.classList.add("number"); // class number active 있음
        // ball.innerText = i; // 텍스트 값은 i span 태그 안에 i 넣기
        
        // lottoBoard.append(ball);
        // 번호 눌렀을 때 orange로 바뀌게 css에 active 클래스 orange가 있음
        // ball.addEventListener("click", () => {
            // count++; 카운트로 할 게 아니고 orange 색으로 해야함
            // ball.classList.add("active");
            // ball.style.backgroundColor = "";
            // css .action에 background-color orange 있음

            // if ( count > 6) {
                // document.getElementsByClassName("active").style.backgroundColor="white";  
                // ball.style.backgroundColor = "white";
                // ball.classList.remove("active");
                // alert("숫자는 6개까지만 선택 가능합니다.");
                // lottoBoard.innerHTML = '';
            // }
            
        // })
    // }
// })
// 다시 눌렀을 때 꺼지고 6개까지만 눌리게

// 로또판 만들어보기

// 로또판 생성 버튼
const createBtn = document.getElementById("createBtn");
// 로또 보드 숫자 들어갈 곳
const lottoBoard = document.getElementById("lottoBoard");
// 로또 생성 버튼 눌렀을 때 숫자 생성
createBtn.addEventListener("click", () => { // 클릭했을 때
    lottoBoard.innerHTML = '';
    // 숫자 생겨야함
    // 숫자 넣는 방법
    // div 생성되고 div 안에 1~45값이 들어가야함
    // for문 사용
    for (let i = 1 ; i < 46 ; i++) { // 1~45일 때 
        const ball = document.createElement("div") // <div></div> for문 밖에 있으면 다 45가 들어가버림 for문 안에 있으면 아래 길이 찾을 수 없음
        // div 태그에 숫자 넣어야함
        // for문 안에서 생성해줘야함
        ball.classList.add("number") // html css 보면 클래스가 2개 걸려있지만
        // active 클래스 넣으면 안됨 다 오렌지색됨
        ball.innerText = i;
        // console.log(ball);
        lottoBoard.append(ball);
    }

    const number = document.querySelectorAll(".number");
    // 로또 번호 생성 완료
    console.log(number);
    // 로또 클릭했을 때
    // 클릭하려면 ball에 클릭 이벤트 줘야함
    // 경우의 수
    // 오렌지색이 아니고 오렌지색버튼개수가 6보다 작거나 같을 때 -> 오렌지색으로 만들고 카운트 올리고
    // 작거나 같으면 7개 체크된 것까지 들어감 6보다 작다
    // 오렌지색이 아니고 오렌지색버튼개수가 6보다 클때 -> 6개 이상 선택할 수 없습니다. 카운트도 안 올리고 오렌지색도 안 만듦 alert창만 띄우면됨
    // 오렌지색일 때 흰색으로 바꿔주고 오렌지색 버튼 개수 -1
    // 오렌지 버튼 색으로 찾으면 힘드니까 카운트를 올려주는 갯수를 1번째 경우에 찍고 마지막 경우에 -1

    // 버튼 생성 각각 버튼에 줘야해서 for문 이용
    let count = 0;
    for (let i = 0; i < number.length; i++ ) {
        number[i].addEventListener("click", () => { // 버튼 각각에 이벤트
            // 조건 작성
            if (number[i].style.backgroundColor != "orange" && count < 6) {
                number[i].style.backgroundColor = "orange"
                count += 1;
            } else if (number[i].style.backgroundColor !== "orange" && count >= 6 ) {
                alert("6개까지만 선택 가능합니다.");
            } else {
                number[i].style.backgroundColor = "white";
                count -= 1;
            }
        })
    }

})