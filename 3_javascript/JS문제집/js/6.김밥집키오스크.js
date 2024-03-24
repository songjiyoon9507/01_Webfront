const empty = document.getElementById("empty-cart");
const cart = document.getElementById("cart");
const total = document.getElementById("total");

// 버튼 눌렀을 때 매개변수 2개 이용하여 값 가져오기
function addToCart(menu, price) {
    // cart 태그 안에 div 만들어서 안에 내용 넣기
    cart.style.display = "block";
    empty.style.display = "none";
    const cartItem = document.createElement("div");
    cartItem.innerHTML = menu;
    cart.append(cartItem);

    all += price;
    total.innerHTML = all;
    // total.innerHtml += price;
}