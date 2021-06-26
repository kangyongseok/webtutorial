const arr = [2, 10, 11, 3, 4, 1, 23, 7, 13, 6]

for (let i = 1; i < arr.length; i++) { // 두번쨰 위치부터 탐색
    let temp = arr[i]
    let prev = i - 1
    while( (prev >= 0) && (arr[prev] > temp) ) {
        arr[prev - 1] = arr[prev]
        prev--
    }
    arr[prev - 1] = temp
}