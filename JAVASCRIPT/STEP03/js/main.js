function formRender (todos) {
    const form = document.querySelector('.form_area form ');
    const title = document.querySelector('.js-todo-input');
    const content = document.querySelector('.js-todo-detail');
    const todoList = todos || [];
    const todoUl = document.querySelector('.todo .card_area');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const fullDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1} - ${new Date().getDate()}`
        const data = {
            title: title.value,
            contents: content.value,
            date: fullDate,
        }
        todoList.push(data)
        localStorage.setItem("todo", JSON.stringify(todoList))
        cardRender(todos, todoUl, 'todoBtn')
        title.value = null
        content.value = null
    })
}

function moveControl (elementBtns, prevList, nextList, prevName, nextName) {
    elementBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            nextList.push(prevList[i])
            prevList.splice(i, 1);
            localStorage.setItem(prevName, JSON.stringify(prevList))
            localStorage.setItem(nextName, JSON.stringify(nextList))
            window.location.reload()
        })
    })
}


function cardRender(items, elementUl, moveClassName) {
    const htmlGroup = items.map((data, i) => {
        const renderHtml = `
            <li class="card">
                <h4>${data.title}</h4>
                <p>${data.contents}</p>
                <p class="date">${data.date}</p>
                <div class="btn_area">
                    <button class="modify ${moveClassName} ${i}">🖌</button>
                    <button class="delete ${moveClassName} ${i}">❌</button>
                </div>
                <div class="move_area">
                    <button class="left_move ${moveClassName}">👈</button>
                    <button class="right_move ${moveClassName}">👉</button>
                </div>
            </li>
        `
        return renderHtml
    })
    elementUl.innerHTML = htmlGroup.join("")
}


window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todo'));
    const usings = JSON.parse(localStorage.getItem('using'));
    const dones = JSON.parse(localStorage.getItem('done'));

    const todoUl = document.querySelector('.todo .card_area');
    const usingUl = document.querySelector('.working .card_area');
    const doneUl = document.querySelector('.done .card_area');

    localStorage.getItem('todo') && cardRender(todos, todoUl, 'todoBtn')
    localStorage.getItem('using') && cardRender(usings, usingUl, 'usingBtn')
    localStorage.getItem('done') && cardRender(dones, doneUl, 'doneBtn')

    formRender(todos)

    const todoBtnsRight = document.querySelectorAll('.right_move.todoBtn');
    const usingBtnsRight = document.querySelectorAll('.right_move.usingBtn');
    const usingBtnsLeft = document.querySelectorAll('.left_move.usingBtn');
    const doneBtnsRight = document.querySelectorAll('.left_move.doneBtn');
    
    let todoList = [];
    let usingList = [];
    let doneList = [];

    if (todoList.length === 0 && localStorage.getItem('todo')) {
        todoList = todos
    }
    if (usingList.length === 0 && localStorage.getItem('using')) {
        usingList = usings
    }
    if (doneList.length === 0 && localStorage.getItem('done')) {
        doneList = dones
    }

    moveControl(todoBtnsRight, todoList, usingList, 'todo', 'using');
    moveControl(usingBtnsRight, usingList, doneList, 'using', 'done');
    moveControl(usingBtnsLeft, usingList, todoList, 'using', 'todo');
    moveControl(doneBtnsRight, doneList, usingList, 'done', 'using')


    const modifyBtn = document.querySelectorAll('.modify');
    const deleteBtn = document.querySelectorAll('.delete');

    modifyBtn.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            console.log(123)
            const classNames = e.target.className.split(' ');
            const selectCard = e.target.closest(".card");
            switch(classNames[1]) {
                case 'todoBtn':
                    selectCard.innerHTML = `
                        <div>
                            <label>할일</label>
                            <input class="modify_todo" type="text" value="${todoList[classNames[2]].title}" />
                        </div>
                        <div>
                            <label>설명</label>
                            <input class="modify_content" type="text" value="${todoList[classNames[2]].contents}" />
                        </div>
                        <button type="submit" class="modify_submit" >확인</button>
                    `
                    document.querySelector('.modify_submit').addEventListener('click', () => {
                        todoList.splice(i, 1, {
                            title: document.querySelector('.modify_todo').value,
                            contents: document.querySelector('.modify_content').value,
                            date: new Date(),
                        })
                        localStorage.setItem('todo', JSON.stringify(todoList))
                        cardRender(todoList, todoUl, 'todoBtn')
                        // window.location.reload();
                    })
                    break;
                case 'usingBtn':
                    selectCard.innerHTML = `
                        <input type="text" value="${usingList[classNames[2]].title}" />
                        <input type="text" value="${usingList[classNames[2]].contents}" />
                    `
                    break;
                case 'doneBtn':
                    selectCard.innerHTML = `
                        <input type="text" value="${doneList[classNames[2]].title}" />
                        <input type="text" value="${doneList[classNames[2]].contents}" />
                    `
                    break;
                default: break;
            }
            
        })
    })


    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const classNames = e.target.className.split(' ');
            switch(classNames[1]) {
                case 'todoBtn':
                    todoList.splice(classNames[2], 1)
                    localStorage.setItem('todo', JSON.stringify(todoList))
                    break;
                case 'usingBtn':
                    usingList.splice(classNames[2], 1)
                    localStorage.setItem('using', JSON.stringify(usingList))
                    break;
                case 'doneBtn':
                    doneList.splice(classNames[2], 1)
                    localStorage.setItem('done', JSON.stringify(doneList))
                    break;
                default: break;
            }
            window.location.reload()
        })
    })

}