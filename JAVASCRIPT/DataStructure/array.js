// const arr = ['사과', '배', '포도', '딸기', '청포도'];
// console.log(arr)
// function setArr(index, value) {
//     const length = arr.length
//     const temp = arr.splice(index, arr.length)
//     arr[index] = 0;
//     for(let i = 0; i < length - index; i++) {
//         arr[(i + 1) + index] = temp[i]
//     }
//     arr[index] = value
// }

// function deleteArr(index) {
//     console.log(arr[index])
// }

// setArr(3, '복숭아')
// setArr(1, '체리')
// console.log(arr)

// deleteArr(1)

const arr = [];

Object.prototype.add = function (index, value) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = value
}

Object.prototype.addFirst = function (value) {
    add(0, value)
}

Object.prototype.remove = function (index) {
    const removeData = arr[index]
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    delete arr[arr.length - 1]
    return removeData
}

Object.prototype.get = function (index) {
    return arr[index]
}

arr.push(10)
arr.push(20)
arr.push(30)

console.log(arr)

arr.add(1, 50)
arr.add(2, 100)
console.log(arr)

console.log(arr.remove(1))
console.log(arr)

console.log(arr.get(1))