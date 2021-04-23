export function doubleNum (value) {
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