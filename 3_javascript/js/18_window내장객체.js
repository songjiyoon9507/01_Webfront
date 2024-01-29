// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {

    // window. 생략 가능
    setTimeout(function() { // 익명함수
        alert("3초 후 출력!");
    }, 3000); // 3000ms == 3s
});

// window.setInterval()

let interval; // setInterval을 저장하기 위한 전역 변수

// 현재 시간을  문자열로 반환하는 함수
function currentTime() {

    const now = new Date(); // date 객체

    let hour = now.getHours(); // 메서드 호출 꼭 써줘야함()부분, 현재 시간
    let min = now.getMinutes(); // 분
    let sec = now.getSeconds(); // 초

    // 시분초 한자리 수일때 앞에 0 붙게
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    // console.log(now);
    // console.log(hour);
    // console.log(min);
    // console.log(sec);

    return hour + " : " + min + " : " + sec;
}

// 어디서 부를지 지정
function clockFn() {

    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function() {
        clock.innerText = currentTime();
    } , 1000);

}

clockFn(); // 함수 호출 새로고침 할 때마다 시간 바뀜

// currentTime(); // 현재 시간 나옴

// clearInterval() 시계 멈춤
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
});