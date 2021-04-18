window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todo'));
    const usings = JSON.parse(localStorage.getItem('using'));
    const dones = JSON.parse(localStorage.getItem('done'));

    const todoUl = document.querySelector('.todo .card_area');
    const usingUl = document.querySelector('.working .card_area');
    const doneUl = document.querySelector('.done .card_area');

    localStorage.getItem('todo') && render(todos, todoUl)
    localStorage.getItem('using') && render(usings, usingUl)
    localStorage.getItem('done') && render(dones, doneUl)
    
    formRender(todos)

}

function formRender (todos) {
    const form = document.querySelector('.form_area form ');
    const title = document.querySelector('.js-todo-input');
    const content = document.querySelector('.js-todo-detail');
    const todoList = todos || [];
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const fullDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1} - ${new Date().getDate()}`
        const data = {
            title: title.value,
            contents: content.value,
            date: fullDate,
        }
        todoList.push(data)
        console.log(todoList)
        localStorage.setItem("todo", JSON.stringify(todoList))
        window.location.reload()
        console.log('submit')
    })
}


function render(items, elementUl) {
    items.forEach(data => {
        const li = document.createElement('LI');
        const h4 = document.createElement('H4');
        const content = document.createElement('P');
        const date = document.createElement('P');
        const btnArea = document.createElement('DIV');
        const moveArea = document.createElement('DIV');
        const modifyBtn = document.createElement('BUTTON');
        const deleteBtn = document.createElement('BUTTON');
        const moveLeft = document.createElement('BUTTON');
        const moveRight = document.createElement('BUTTON');

        li.classList.add('card');
        date.classList.add('date');
        btnArea.classList.add('btn_area');
        moveArea.classList.add('move_area');
        moveLeft.classList.add('left_move');
        moveRight.classList.add('right_move');

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        elementUl.appendChild(li)
        li.appendChild(h4);
        li.appendChild(content);
        li.appendChild(date);
        li.appendChild(btnArea);
        li.appendChild(moveArea);
        btnArea.appendChild(modifyBtn)
        btnArea.appendChild(deleteBtn)
        moveArea.appendChild(moveLeft)
        moveArea.appendChild(moveRight)
    })
}
