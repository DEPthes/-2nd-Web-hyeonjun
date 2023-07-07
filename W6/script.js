function addItem() {
    const inputItem = document.getElementById("inputItem");
    const inputCategory = document.getElementById("inputCategory");
    const todoList = document.getElementById("todoList");
  
    // 입력된 항목 및 카테고리 가져오기
    const itemText = inputItem.value;
    const category = inputCategory.value;
  
    // 입력값이 비어있는지 확인
    if (itemText === "" || category === "") {
      alert("할 일과 카테고리를 모두 입력하세요.");
      return;
    }
  
    // 선택한 카테고리가 유효한지 확인
    var categorySelect = document.getElementById("filterCategory");
    if (!Array.from(categorySelect.options).some(option => option.value === category)) {
      alert("유효한 카테고리를 선택하세요.");
      return;
    }
  
    // 새로운 리스트 아이템 생성
    const newItem = document.createElement("li");
    const itemTextSpan = document.createElement("span");
    itemTextSpan.innerText = itemText;
    newItem.appendChild(itemTextSpan);
  
    // 완료 버튼 생성
    const completeButton = document.createElement("button");
    completeButton.innerText = "✔️";
    completeButton.onclick = function() {
        todoList.removeChild(newItem);
        alert("수고하셨습니다.");
      saveTodoList();
    };
    newItem.appendChild(completeButton);
  
    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "🗑️";
    deleteButton.onclick = function() {
      todoList.removeChild(newItem);
      saveTodoList();
    };
    newItem.appendChild(deleteButton);
  
    // 카테고리 데이터 속성 설정
    newItem.setAttribute("data-category", category);
  
    // 리스트에 새로운 아이템 추가
    todoList.appendChild(newItem);
  
    // 입력 필드 초기화
    inputItem.value = "";
    inputCategory.value = "";
  
    // 로컬 스토리지에 투두 리스트 저장
    saveTodoList();
  }
  
  function saveTodoList() {
    const todoItems = document.querySelectorAll("#todoList li");
    let todoListData = [];
  
    for (let i = 0; i < todoItems.length; i++) {
      let item = todoItems[i];
      const itemText = item.querySelector("span").innerText;
      const category = item.getAttribute("data-category");
  
      todoListData.push({
        text: itemText,
        category: category
      });
    }
  
    localStorage.setItem("todoList", JSON.stringify(todoListData));
  }
  
  function loadTodoList() {
    const todoList = document.getElementById("todoList");
    const storedTodoList = localStorage.getItem("todoList");
  
    if (storedTodoList) {
      const todoListData = JSON.parse(storedTodoList);
  
      for (let i = 0; i < todoListData.length; i++) {
        let itemData = todoListData[i];
        const newItem = document.createElement("li");
        const itemTextSpan = document.createElement("span");
        itemTextSpan.innerText = itemData.text;
        newItem.appendChild(itemTextSpan);
  
        const completeButton = document.createElement("button");
        completeButton.innerText = "✔️";
        completeButton.onclick = function() {
            todoList.removeChild(newItem);
            alert("수고하셨습니다.");
          saveTodoList();
        };
        newItem.appendChild(completeButton);
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "🗑️";
        deleteButton.onclick = function() {
          todoList.removeChild(newItem);
          saveTodoList();
        };
        newItem.appendChild(deleteButton);
  
        newItem.setAttribute("data-category", itemData.category);
  
        todoList.appendChild(newItem);
      }
    }
  }
  
  function filterByCategory() {
    const category = document.getElementById("filterCategory").value;
    const todoItems = document.querySelectorAll("#todoList li");
  
    for (let i = 0; i < todoItems.length; i++) {
      let item = todoItems[i];
      const itemCategory = item.getAttribute("data-category");
  
      if (category === "all" || category === itemCategory) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    }
  }
  
  // 페이지 로드 시 투두 리스트 로드
  window.addEventListener("load", function() {
    loadTodoList();
    filterByCategory();
  });
  