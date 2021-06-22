## 버블정렬 (오름차순 기준)
- 버블정렬은 한 싸이클이 끝나면 가장 큰수는 가장 마지막에 위치
- 버블정렬은 배열을 순회하면서 서로 인접한 두 수를 비교하여 자리를 바꿔나감
- 한 싸이클이 끝나면 가장 오른쪽부터 정렬되기때문에 `arr.length - i` 로 반복 횟수를 줄임
- 시간복잡도는 `O(N2)(제곱)` 동일한 배열로 중첩 반복문을 사용하기떄문
- 배열의 정렬상태와 상관없이 시간복잡도의 상한선과 하한선이 동일하다.

```js
const arr = [10, 13, 1, 2, 6, 9, 4, 20]
let temp = 0;
let cycle = 0;
for (let i = 0; i < arr.length; i++) {
    cycle++
    for (let j = 1; j < arr.length - i; j++) {
        if (arr[j - 1] < arr[j]) {
            temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp
        }
    }
    console.log(`${cycle}: ${arr}`)
    console.log('===========================')
}
```