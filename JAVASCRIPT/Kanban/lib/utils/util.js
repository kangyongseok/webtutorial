"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prevCard = exports.nextCard = exports.modalSave = exports.modalClose = exports.cardModify = exports.cardDelete = exports.createDate = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var doubleNum = function doubleNum(value) {
  if (String(value).length < 2) {
    return "0".concat(value);
  }

  return value;
};

var createDate = function createDate() {
  var today = new Date();
  var year = today.getFullYear(); // 년도

  var month = today.getMonth() + 1; // 월

  var date = today.getDate();
  var hours = today.getHours(); // 시

  var minutes = today.getMinutes();
  var writeDate = "".concat(year, "-").concat(doubleNum(month), "-").concat(doubleNum(date), " ").concat(doubleNum(hours), ":").concat(doubleNum(minutes));
  return writeDate;
};

exports.createDate = createDate;

var cardDelete = function cardDelete(area, list, render) {
  var cardDelete = document.querySelectorAll(".".concat(area, ".delete"));

  _toConsumableArray(cardDelete).forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      list.splice(i, 1);
      localStorage.setItem(area, JSON.stringify(list));
      render();
    });
  });
};

exports.cardDelete = cardDelete;

var cardModify = function cardModify(area, lists, render) {
  var cardModify = document.querySelectorAll(".".concat(area, ".modify"));
  var modal = document.querySelector('.modal_wrap');
  var modalInputTitle = document.querySelector('.modal_body .title_input');
  var modalInputContent = document.querySelector('.modal_body .content_input');

  _toConsumableArray(cardModify).forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      modal.style.display = "block"; // modal.style 에 직접 스트링 값을 할당하는것은 불가능 style 은 읽기 전용

      modalInputTitle.value = lists[i].title; // value 가 없는 객체이기때문에 value 를 갖게 만들어 주려면 <HTMLInputElement> 로 캐스팅 해야한다

      modalInputContent.value = lists[i].content;
      modalSave(area, lists, i, render);
    });
  });
};

exports.cardModify = cardModify;

var modalClose = function modalClose() {
  var modal = document.querySelector('.modal_wrap');
  var closeBtn = document.querySelector('.modal_close');

  if (modal) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = "none";
    });
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        modal.style.display = "none";
      }
    });
  }
};

exports.modalClose = modalClose;

var modalSave = function modalSave(area, lists, index, render) {
  var $save = document.querySelector('.modal_footer button');
  var $modalInputTitle = document.querySelector('.modal_body .title_input');
  var $modalInputContent = document.querySelector('.modal_body .content_input');
  $save.addEventListener('click', function () {
    var modifyData = {
      title: $modalInputTitle.value,
      // strictNullChecks: true 하면 null 체크를 하는데 이때 무조건 값이 들어있을값에 대해서는 !를 붙여서 에러를 제거할 수 있다.
      content: $modalInputContent.value,
      date: createDate()
    };
    lists.splice(index, 1, modifyData);
    localStorage.setItem(area, JSON.stringify(lists));
    modalClose();
    render();
  });
};

exports.modalSave = modalSave;

var nextCard = function nextCard() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  var prevKey = arg[0],
      nextKey = arg[1],
      prevList = arg[2],
      nextList = arg[3],
      render = arg[4];
  var $next = document.querySelectorAll(".".concat(prevKey, ".next"));

  _toConsumableArray($next).forEach(function (btn, i) {
    btn.addEventListener('click', function (e) {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevKey, JSON.stringify(prevList));
      localStorage.setItem(nextKey, JSON.stringify(nextList));
      render();
    });
  });
};

exports.nextCard = nextCard;

var prevCard = function prevCard() {
  for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arg[_key2] = arguments[_key2];
  }

  var prevKey = arg[0],
      nextKey = arg[1],
      prevList = arg[2],
      nextList = arg[3],
      render = arg[4];
  var $prev = document.querySelectorAll(".".concat(prevKey, ".prev"));

  _toConsumableArray($prev).forEach(function (btn, i) {
    btn.addEventListener('click', function (e) {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevKey, JSON.stringify(prevList));
      localStorage.setItem(nextKey, JSON.stringify(nextList));
      render();
    });
  });
};

exports.prevCard = prevCard;