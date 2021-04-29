function doubleNum (value: number) {
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

export function cardDelete (area: string, list: Array<object>, render: Function) {
    const cardDelete = document.querySelectorAll(`.${area}.delete`);
    [...cardDelete].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            list.splice(i, 1);
            localStorage.setItem(area, JSON.stringify(list))
            render()
        })
    })
}

export function cardModify (area: string, lists: [{title: string, content: string}], render: Function) {
    const cardModify = document.querySelectorAll(`.${area}.modify`);
    const modal = <HTMLElement>document.querySelector('.modal_wrap');
    const modalInputTitle = <HTMLInputElement>document.querySelector('.modal_body .title_input');
    const modalInputContent = <HTMLInputElement>document.querySelector('.modal_body .content_input');
    [...cardModify].forEach((btn, i) => {
        btn.addEventListener('click', () => {
            modal!.style.display = "block"; // modal.style 에 직접 스트링 값을 할당하는것은 불가능 style 은 읽기 전용
            modalInputTitle!.value = lists[i].title // value 가 없는 객체이기때문에 value 를 갖게 만들어 주려면 <HTMLInputElement> 로 캐스팅 해야한다
            modalInputContent!.value = lists[i].content
            modalSave(area, lists, i, render)
        })
    })
}

export function modalClose () {
    const modal =  <HTMLElement>document.querySelector('.modal_wrap');
    const closeBtn = <HTMLElement>document.querySelector('.modal_close');
    if (modal) {
        closeBtn!.addEventListener('click', () => {
            modal.style.display = "none";
        })
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                modal.style.display = "none";
            }
        })
    }
}

export function modalSave (area: string, lists: [{title: string, content: string}], index: number, render: Function) {
    const $save = document.querySelector('.modal_footer button');
    const $modalInputTitle = <HTMLInputElement>document.querySelector('.modal_body .title_input');
    const $modalInputContent = <HTMLInputElement>document.querySelector('.modal_body .content_input');
    $save!.addEventListener('click', () => {
        const modifyData = {
            title: $modalInputTitle!.value, // strictNullChecks: true 하면 null 체크를 하는데 이때 무조건 값이 들어있을값에 대해서는 !를 붙여서 에러를 제거할 수 있다.
            content: $modalInputContent!.value,
            date: createDate(),
        }

        lists.splice(index, 1, modifyData);
        localStorage.setItem(area, JSON.stringify(lists))
        modalClose()
        render()
    })
}

export function nextCard (...arg: [string, string, Array<object>, Array<object>, Function]) {
    const [prevKey, nextKey, prevList, nextList, render] = arg;
    const $next = document.querySelectorAll(`.${prevKey}.next`);
    [...$next].forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            nextList.push(prevList[i])
            prevList.splice(i, 1);
            localStorage.setItem(prevKey, JSON.stringify(prevList))
            localStorage.setItem(nextKey, JSON.stringify(nextList))
            render()
        })
    })
}

interface Card {
    prevKey: string,
    nextKey: string,
    prevList: Array<object>,
    nextList: Array<object>,
    render: Function,
}

export function prevCard (...arg: [string, string, Array<object>, Array<object>, Function]) {
    const [prevKey, nextKey, prevList, nextList, render] = arg;
    const $prev = document.querySelectorAll(`.${prevKey}.prev`);
    [...$prev].forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            nextList.push(prevList[i])
            prevList.splice(i, 1);
            localStorage.setItem(prevKey, JSON.stringify(prevList))
            localStorage.setItem(nextKey, JSON.stringify(nextList))
            render()
        })
    });
}