const arr = [13, 7, 5, 1, 3, 2];
// sum = 10 이 되는 값을 리턴
const hashTable = {}
arr.map((num, i) => {
    hashTable[num] = i
})

console.log(hashTable)

arr.map(num => {
    if (hashTable[10 - num]) {
        if (arr[hashTable[10 - num]] + num === 10) {
            console.log(num, arr[hashTable[10 - num]])
        }
    }
})

