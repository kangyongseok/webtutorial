function doubleNum (value) {
    if (String(value).length < 2) {
        return `0${value}`
    }
    return value
}

export function createDate () {
    const today = new Date();   
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1;  // 월
    const date = today.getDate(); 
    const hours = today.getHours(); // 시
    const minutes = today.getMinutes(); 
    const writeDate = `${year}-${doubleNum(month)}-${doubleNum(date)} ${doubleNum(hours)}:${doubleNum(minutes)}` 

    return writeDate
}

export function cardDelete (area, list, render) {
    const cardDelete = document.querySelectorAll(`.${area}.delete`);
    [...cardDelete].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            list.splice(i, 1);
            localStorage.setItem(area, JSON.stringify(list))
            render()
        })
    })
}

export function cardModify (area) {
    const cardModify = document.querySelectorAll(`.${area}.modify`);
    const modal = document.querySelector('.modal_wrap');
    [...cardModify].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modal.style = "display: block";
        })
    })
}

export function modalClose () {
    const modal = document.querySelector('.modal_wrap');
    const closeBtn = document.querySelector('.modal_close');
    if (modal) {
        closeBtn.addEventListener('click', () => {
            modal.style = "display: none";
        })
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                modal.style = "display: none";
            }
        })
    }
}