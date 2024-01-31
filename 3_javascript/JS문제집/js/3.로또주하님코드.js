// 로또 번호까지 생성하고 눌리게 만들었지만 다시 눌렀을 때 돌아오지 않음
// orange color의 숫자가 아닌 ball 누르는 개수로 count해서 6번 이상 눌리지 않음
// 등등의 문제로 다시

// 로또판 생성 버튼 가져오기

// 로또 번호 들어갈 곳

// 로또판 생성 버튼
const createBtn = document.querySelector('#createBtn');

// 로또 보드 로또 번호 들어갈 곳
const lottoBoard = document.querySelector('#lottoBoard');


createBtn.addEventListener('click', () => { // 생성 버튼 눌렀을 때
    let count = 0;
    // 클릭했을 때 카운트가 초기화 안되면 6 이상 되고 나서
    // 로또판 생성 누르고 버튼 누르면 아무것도 눌린 게 없는데
    // 6개까지만 선택할 수 있다고 뜸
    lottoBoard.innerHTML = ''; // 안쓰면 로또판 생성 클릭했을 때 무한 생성됨
    for(let i=1; i<=45; i++) { // 1~45까지

        lottoBoard.innerHTML += `<div class="number">${i}</div>`; // innerHTML로 div태그와 class 숫자를 같이 추가함
    }

    const number = document.querySelectorAll('.number'); // number class를 가진 모든 배열을 가져옴 number 변수에 대입

        // console.log(number); // div 태그 자체
            for(let i=0; i<number.length; i++) { // number.length 배열의 길이 45 가져옴 0 <= i < 45 0 부터 시작

                number[i].addEventListener('click', () => { // 버튼마다 click event 추가
                    // 첫번째 경우
                    if(number[i].style.backgroundColor !== `orange` && count < 6) { // 아직 올라가는 count 없음

                        number[i].style.backgroundColor = `orange`;
                        // 클릭했을 때 버튼이 orange 색이 아니고 count가 6보다 작으면 눌렀을 때 색이 orange로 바뀌면서 카운트는 1 올라감

                        count += 1;
                    // 두번째 경우
                    } else if(number[i].style.backgroundColor !== `orange` && count >= 6) {
                        // 오렌지색이 아니고 count가 6보다 클 때 더 이상 클릭하면 안될 때 색도 변하면 안됨
                        // 카운트도 올릴 필요 없음
                        alert('6보다 많이 선택할 수 없습니다!');

                    } else {
                        // 오렌지가 아니고 6보다 작을 때, 오렌지가 아니고 6보다 크거나 같을 때
                        // 나머지는 오렌지일 때 화이트로 바뀌니까 카운트를 하나 빼줌
                        number[i].style.backgroundColor = `white`;

                        count -= 1;
                    }
                  //  console.log(count);
                });
                
            }


});











