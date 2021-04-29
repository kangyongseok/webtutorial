"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prevCard = exports.nextCard = exports.modalSave = exports.modalClose = exports.cardModify = exports.cardDelete = exports.createDate = void 0;
function doubleNum(value) {
    if (String(value).length < 2) {
        return `0${value}`;
    }
    return value;
}
function createDate() {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate();
    const hours = today.getHours(); // 시
    const minutes = today.getMinutes();
    const writeDate = `${year}-${doubleNum(month)}-${doubleNum(date)} ${doubleNum(hours)}:${doubleNum(minutes)}`;
    return writeDate;
}
exports.createDate = createDate;
function cardDelete(area, list, render) {
    const cardDelete = document.querySelectorAll(`.${area}.delete`);
    [...cardDelete].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            list.splice(i, 1);
            localStorage.setItem(area, JSON.stringify(list));
            render();
        });
    });
}
exports.cardDelete = cardDelete;
function cardModify(area, lists, render) {
    const cardModify = document.querySelectorAll(`.${area}.modify`);
    const modal = document.querySelector('.modal_wrap');
    const modalInputTitle = document.querySelector('.modal_body .title_input');
    const modalInputContent = document.querySelector('.modal_body .content_input');
    [...cardModify].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modal.style.display = "block"; // modal.style 에 직접 스트링 값을 할당하는것은 불가능 style 은 읽기 전용
            modalInputTitle.value = lists[i].title; // value 가 없는 객체이기때문에 value 를 갖게 만들어 주려면 <HTMLInputElement> 로 캐스팅 해야한다
            modalInputContent.value = lists[i].content;
            modalSave(area, lists, i, render);
        });
    });
}
exports.cardModify = cardModify;
function modalClose() {
    const modal = document.querySelector('.modal_wrap');
    const closeBtn = document.querySelector('.modal_close');
    if (modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                modal.style.display = "none";
            }
        });
    }
}
exports.modalClose = modalClose;
function modalSave(area, lists, index, render) {
    const $save = document.querySelector('.modal_footer button');
    const $modalInputTitle = document.querySelector('.modal_body .title_input');
    const $modalInputContent = document.querySelector('.modal_body .content_input');
    $save.addEventListener('click', () => {
        const modifyData = {
            title: $modalInputTitle.value,
            content: $modalInputContent.value,
            date: createDate(),
        };
        lists.splice(index, 1, modifyData);
        localStorage.setItem(area, JSON.stringify(lists));
        modalClose();
        render();
    });
}
exports.modalSave = modalSave;
function nextCard(...arg) {
    const [prevKey, nextKey, prevList, nextList, render] = arg;
    const $next = document.querySelectorAll(`.${prevKey}.next`);
    [...$next].forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            nextList.push(prevList[i]);
            prevList.splice(i, 1);
            localStorage.setItem(prevKey, JSON.stringify(prevList));
            localStorage.setItem(nextKey, JSON.stringify(nextList));
            render();
        });
    });
}
exports.nextCard = nextCard;
function prevCard(...arg) {
    const [prevKey, nextKey, prevList, nextList, render] = arg;
    const $prev = document.querySelectorAll(`.${prevKey}.prev`);
    [...$prev].forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            nextList.push(prevList[i]);
            prevList.splice(i, 1);
            localStorage.setItem(prevKey, JSON.stringify(prevList));
            localStorage.setItem(nextKey, JSON.stringify(nextList));
            render();
        });
    });
}
exports.prevCard = prevCard;
