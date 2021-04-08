// const presetTodo = [
//     {
//         title: '자바스크립트배우기',
//         contents: '자바스크립트 기초 배우기',
//         date: '2021-03-02',
//     },
//     {
//         title: '칸반보드 만들기',
//         contents: '칸반보드의 디자인구성과 레이아웃 짜기',
//         date: '2021-10-02',
//     },
//     {
//         title: '할일 목록 구성중',
//         contents: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi dolor, ducimus,
//         ratione iste et assumenda eaque quia temporibus sit ullam ad repellat nulla odit optio
//         iure ex ea minus.`,
//         date: '2021-03-02',
//     }
// ]
// const presetUsing = [
//     {
//         title: 'Html / Css  종료',
//         contents: '마크업 언어로 화면 구성하는 중',
//         date: '2021-03-02',
//     },
//     {
//         title: '스터디 참여하기',
//         contents: '스터디룸 시간 맞춰서 도착하기',
//         date: '2021-10-02',
//     },
//     {
//         title: '폼 태그 작성하기',
//         contents: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi dolor, ducimus,
//         ratione iste et assumenda eaque quia temporibus sit ullam ad repellat nulla odit optio
//         iure ex ea minus.`,
//         date: '2021-03-02',
//     }
// ]
// const presetDone = [
//     {
//         title: '출근하기',
//         contents: '버그수정하기',
//         date: '2021-03-02',
//     },
//     {
//         title: '강의듣기',
//         contents: '자바스크립트 기초와 ES6 문법 익히기',
//         date: '2021-10-02',
//     },
//     {
//         title: '할일 목록 구성중',
//         contents: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi dolor, ducimus,
//         ratione iste et assumenda eaque quia temporibus sit ullam ad repellat nulla odit optio
//         iure ex ea minus.`,
//         date: '2021-03-02',
//     }
// ]
// localStorage.setItem('todo', JSON.stringify(presetTodo))
// localStorage.setItem('using', JSON.stringify(presetUsing))
// localStorage.setItem('done', JSON.stringify(presetDone))

window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todo'));
    const usings = JSON.parse(localStorage.getItem('using'));
    const dones = JSON.parse(localStorage.getItem('done'));
    const todoUl = document.querySelector('.todo .card_area');
    const usingUl = document.querySelector('.working .card_area');
    const doneUl = document.querySelector('.done .card_area');
    
    localStorage.getItem('todo') && todos.forEach(data => {
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
        moveRight.classList.add('right_move');

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        todoUl.appendChild(li)
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

    localStorage.getItem('using') && usings.forEach(data => {
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

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        usingUl.appendChild(li)
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


    localStorage.getItem('done') && dones.forEach(data => {
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

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        doneUl.appendChild(li)
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
    let usingList = [];
    let todoList = [];
    if (usingList.length === 0 && localStorage.getItem('using')) {
        usingList = usings
    }
    const moveBtns = document.querySelectorAll('.right_move');
    [...moveBtns].map((btn, i) => {
        btn.addEventListener('click', (e) => {
            usingList.push(todoList[i])
            todoList.splice(i, 1);
            console.log(todoList, usingList)
            localStorage.setItem('todo', JSON.stringify(todoList))
            localStorage.setItem('using', JSON.stringify(usingList))
            window.location.reload()
        })
    })

    // form
    const form = document.querySelector('.form_area form');
    const submitBtn = document.querySelector('.js-submit-btn');
    const todoInput = document.querySelector('.js-todo-input');
    const contentInput = document.querySelector('.js-todo-detail');
    
    if (todoList.length === 0 && localStorage.getItem('todo')) {
        todoList = todos
    }
    submitBtn.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        todoList.push({title: todoInput.value, contents: contentInput.value, date: new this.Date()})
        localStorage.setItem('todo', JSON.stringify(todoList))
        window.location.reload()
    })
}