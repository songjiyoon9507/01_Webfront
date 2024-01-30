const number = document.getElementsByClassName("number");

console.log(number);

console.log(number[0]);

for (let i = 0; i < number.length ; i ++) {
    console.log(number[i].innerText);
    
    console.log(number[i]);

    number[i].addEventListener("click", () => {
        
    })

}