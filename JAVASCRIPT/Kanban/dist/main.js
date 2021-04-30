"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_js_1 = require("./template.js");
const util_js_1 = require("./utils/util.js");
const todos = JSON.parse(localStorage.getItem('todos')) || [];
const usings = JSON.parse(localStorage.getItem('usings')) || [];
const dones = JSON.parse(localStorage.getItem('dones')) || [];
function cardRender(lists, btnName) {
    return lists.map((item, i) => {
        const cardItem = `
        <div class="ui cards" style="width: 95%">
            <div class="card" style="width: 100%">
                <div class="btn_area">
                    ${btnName !== 'todos' ? (`
                        <button class="${btnName} prev"><i class="large red history icon"></i></button>
                        `) : ''}
                    <button class="${btnName} next"><i class="large teal check circle outline icon link"></i></button>
                    <button class="${btnName} modify"><i class="large edit outline icon link"></i></button>
                    <button class="${btnName} delete"><i class="large grey red close icon link"></i></button>
                </div>
                <div class="content">
                    <div class="header">${item.title}</div>
                    <div class="meta">${item.date}</div>
                    <div class="description">${item.content}</div>
                </div>
            </div>
        </div>
        `;
        return cardItem;
    }).join('');
}
function formEvent() {
    const $Form = document.querySelector('.form_area .form');
    const $TitleInput = document.querySelector('.title_input');
    const $ContentInput = document.querySelector('.content_input');
    $Form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = $TitleInput.value;
        const content = $ContentInput.value;
        const formValue = { title, content, date: util_js_1.createDate() };
        if (!title)
            return alert('제목을 입력해 주세요.');
        if (!content)
            return alert('내용을 입력해주세요.');
        todos.push(formValue);
        localStorage.setItem('todos', JSON.stringify(todos));
        render();
    });
}
function render() {
    const $root = document.querySelector('#root');
    const $modal = document.createElement('div');
    $modal.classList.add('modal_wrap');
    $modal.innerHTML = template_js_1.$ModifyModal;
    $root.innerHTML = template_js_1.$GridLayout;
    $root.appendChild($modal);
    const $grids = document.querySelectorAll('.column');
    $grids[0].innerHTML = template_js_1.$WriteForm;
    $grids[1].innerHTML = template_js_1.$TodoList;
    $grids[2].innerHTML = template_js_1.$UsingList;
    $grids[3].innerHTML = template_js_1.$DoneList;
    formEvent();
    const $TitleInput = document.querySelector('.title_input');
    $TitleInput.focus();
    const todoUl = document.querySelector('.todo .list_area');
    const usingUl = document.querySelector('.using .list_area');
    const doneUl = document.querySelector('.done .list_area');
    todoUl.innerHTML = cardRender(todos, 'todos');
    usingUl.innerHTML = cardRender(usings, 'usings');
    doneUl.innerHTML = cardRender(dones, 'dones');
    util_js_1.cardDelete('todos', todos, render);
    util_js_1.cardDelete('usings', usings, render);
    util_js_1.cardDelete('dones', dones, render);
    util_js_1.cardModify('todos', todos, render);
    util_js_1.cardModify('usings', usings, render);
    util_js_1.cardModify('dones', dones, render);
    util_js_1.nextCard('todos', 'usings', todos, usings, render);
    util_js_1.nextCard('usings', 'dones', usings, dones, render);
    util_js_1.prevCard('dones', 'usings', dones, usings, render);
    util_js_1.prevCard('usings', 'todos', usings, todos, render);
    util_js_1.modalClose();
    respondive();
}
render();
