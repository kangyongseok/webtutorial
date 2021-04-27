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

export function cardModify (area, lists, render) {
    const cardModify = document.querySelectorAll(`.${area}.modify`);
    const modal = document.querySelector('.modal_wrap');
    const modalInputTitle = document.querySelector('.modal_body .title_input');
    const modalInputContent = document.querySelector('.modal_body .content_input');
    [...cardModify].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modal.style = "display: block";
            modalInputTitle.value = lists[i].title
            modalInputContent.value = lists[i].content
            modalSave(area, lists, i, render)
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

export function modalSave (area, lists, index, render) {
    const $save = document.querySelector('.modal_footer button');
    const $modalInputTitle = document.querySelector('.modal_body .title_input');
    const $modalInputContent = document.querySelector('.modal_body .content_input');
    $save.addEventListener('click', () => {
        const modifyData = {
            title: $modalInputTitle.value,
            content: $modalInputContent.value,
            date: createDate(),
        }
        console.log(lists)
        lists.splice(index, 1, modifyData);
        localStorage.setItem(area, JSON.stringify(lists))
        modalClose()
        render()
    })
}

export function moveCard (area, prevList, nextList, nextKey, render) {
    const $next = document.querySelectorAll(`.${area}.next`);
    console.log($next);
    [...$next].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            nextList.push(prevList[i])
            prevList.splice(i, 1);
            localStorage.setItem(area, JSON.stringify(prevList))
            localStorage.setItem(nextKey, JSON.stringify(nextList))
            render()
        })
    })
}