import { 
    $WriteForm,
    $GridLayout,
    $TodoList,
    $UsingList,
    $DoneList,
    $ModifyModal,
} from './template.js';
import { createDate, cardDelete, cardModify, modalClose } from './utils/util.js';


const todos = JSON.parse(localStorage.getItem('todos')) || [];
const usings = JSON.parse(localStorage.getItem('usings')) || [];
const done = JSON.parse(localStorage.getItem('dones')) || [];


function cardRender (lists, btnName) {
    return lists.map((item, i) => {
        const cardItem = `
        <div class="ui cards" style="width: 95%">
            <div class="card" style="width: 100%">
                <div class="btn_area">
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
        `
        return cardItem
    }).join('')
}

function formEvent () {
    const $Form = document.querySelector('.form_area .form');
    const $TitleInput = document.querySelector('.title_input');
    const $ContentInput = document.querySelector('.content_input');
    $Form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = $TitleInput.value
        const content = $ContentInput.value
        const formValue = {title, content, date: createDate()}

        if (!title) return alert('제목을 입력해 주세요.')
        if (!content) return alert('내용을 입력해주세요.')

        todos.push(formValue)
        localStorage.setItem('todos', JSON.stringify(todos))
        render()
    })
}

function render () {
    const $root = document.querySelector('#root');
    const $modal = document.createElement('div');

    $modal.classList.add('modal_wrap');
    $modal.innerHTML = $ModifyModal;
    $root.innerHTML = $GridLayout;
    $root.appendChild($modal)

    const $grids = document.querySelectorAll('.column');
    $grids[0].innerHTML = $WriteForm
    $grids[1].innerHTML = $TodoList
    $grids[2].innerHTML = $UsingList
    $grids[3].innerHTML = $DoneList

    formEvent()
    const $TitleInput = document.querySelector('.title_input');
    $TitleInput.focus()

    const todoUl = document.querySelector('.todo .list_area')
    todoUl.innerHTML = cardRender(todos, 'todos')

    cardDelete('todos', todos, render)
    cardModify('todos', todos, render)
    modalClose()
}

render()
