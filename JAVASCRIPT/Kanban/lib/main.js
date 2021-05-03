"use strict";

var _template = require("./template.js");

var _util = require("./utils/util.js");

var todos = JSON.parse(localStorage.getItem('todos') || '[]'); // localstorage 에는 문자열만 들어가므로 null 일때 리턴할 스트링값이 필요

var usings = JSON.parse(localStorage.getItem('usings') || '[]');
var dones = JSON.parse(localStorage.getItem('dones') || '[]');

var cardRender = function cardRender(lists, btnName) {
  return lists.map(function (item, i) {
    var cardItem = "\n        <div class=\"ui cards\" style=\"width: 95%\">\n            <div class=\"card\" style=\"width: 100%\">\n                <div class=\"btn_area\">\n                    ".concat(btnName !== 'todos' ? "\n                        <button class=\"".concat(btnName, " prev\"><i class=\"large red history icon\"></i></button>\n                        ") : '', "\n                    <button class=\"").concat(btnName, " next\"><i class=\"large teal check circle outline icon link\"></i></button>\n                    <button class=\"").concat(btnName, " modify\"><i class=\"large edit outline icon link\"></i></button>\n                    <button class=\"").concat(btnName, " delete\"><i class=\"large grey red close icon link\"></i></button>\n                </div>\n                <div class=\"content\">\n                    <div class=\"header\">").concat(item.title, "</div>\n                    <div class=\"meta\">").concat(item.date, "</div>\n                    <div class=\"description\">").concat(item.content, "</div>\n                </div>\n            </div>\n        </div>\n        ");
    return cardItem;
  }).join('');
};

var formEvent = function formEvent() {
  var $Form = document.querySelector('.form_area .form');
  var $TitleInput = document.querySelector('.title_input');
  var $ContentInput = document.querySelector('.content_input');
  $Form.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = $TitleInput.value;
    var content = $ContentInput.value;
    var formValue = {
      title: title,
      content: content,
      date: (0, _util.createDate)()
    };
    if (!title) return alert('제목을 입력해 주세요.');
    if (!content) return alert('내용을 입력해주세요.');
    todos.push(formValue);
    localStorage.setItem('todos', JSON.stringify(todos));
    render();
  });
};

var render = function render() {
  var $root = document.querySelector('#root');
  var $modal = document.createElement('div');
  $modal.classList.add('modal_wrap');
  $modal.innerHTML = _template.$ModifyModal;
  $root.innerHTML = _template.$GridLayout;
  $root.appendChild($modal);
  var $grids = document.querySelectorAll('.column');
  $grids[0].innerHTML = _template.$WriteForm;
  $grids[1].innerHTML = _template.$TodoList;
  $grids[2].innerHTML = _template.$UsingList;
  $grids[3].innerHTML = _template.$DoneList;
  formEvent();
  var $TitleInput = document.querySelector('.title_input');
  $TitleInput.focus();
  var todoUl = document.querySelector('.todo .list_area');
  var usingUl = document.querySelector('.using .list_area');
  var doneUl = document.querySelector('.done .list_area');
  todoUl.innerHTML = cardRender(todos, 'todos');
  usingUl.innerHTML = cardRender(usings, 'usings');
  doneUl.innerHTML = cardRender(dones, 'dones');
  (0, _util.cardDelete)('todos', todos, render);
  (0, _util.cardDelete)('usings', usings, render);
  (0, _util.cardDelete)('dones', dones, render);
  (0, _util.cardModify)('todos', todos, render);
  (0, _util.cardModify)('usings', usings, render);
  (0, _util.cardModify)('dones', dones, render);
  (0, _util.nextCard)('todos', 'usings', todos, usings, render);
  (0, _util.nextCard)('usings', 'dones', usings, dones, render);
  (0, _util.prevCard)('dones', 'usings', dones, usings, render);
  (0, _util.prevCard)('usings', 'todos', usings, todos, render);
  (0, _util.modalClose)();
};

render();