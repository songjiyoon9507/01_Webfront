updateBtn.addEventListener("click", e => {

    // 위에서 setAttribute 로 data-todo-no 속성을 추가해둠
    // e.target.dataset 안에 있는 todoNo 으로 가져옴

    // 서버로 전달해야되는 값을 객체로 묶어둠
    const obj = {
        "todoNo" : e.target.dataset.todoNo,
        "todoTitle" : updateTitle.value,
        "todoContent" : updateContent.value
    };

    // 비동기 요청
    fetch("/ajax/update", {
        method : "PUT",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(obj)
    })
    .then(resp => resp.text())
    .then(result => {

        if(result > 0) {
            alert("수정 성공");

            // 수정 레이어 숨기기
            updateLayer.classList.add("popup-hidden");
            
            // 목록 다시 조회
            selectTodoList();

            popupTodoTitle.innerText = updateTitle.value;

            popupTodoContent.innerHTML
                = updateContent.value.replaceAll("\n", "<br>");

            popupLayer.classList.remove("popup-hidden");

            // 수정 레이어에 있는 남은 흔적 제거
            updateTitle.value = "";
            updateContent.value = "";
            updateBtn.removeAttribute("data-todo-no"); // 속성 제거

        } else {
            alert("수정 실패");
        }
    });
});