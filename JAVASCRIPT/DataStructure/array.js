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