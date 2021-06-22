const arr = [10, 13, 1, 2, 6, 9, 4, 20]
let temp = 0;
let cycle = 0;
for (let i = 0; i < arr.length; i++) {
    cycle++
    for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] > arr[j]) {
            temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
        }
    }
    console.log(`${cycle}: ${arr}`)
    console.log('===========================')
}