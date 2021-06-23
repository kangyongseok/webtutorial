const arr = [10, 13, 1, 2, 6, 9, 4, 20]
let minIndex = null
let temp = null;
for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j
        }
    }
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp

    console.log(`${i}: ${arr}`)
}

console.log(arr)