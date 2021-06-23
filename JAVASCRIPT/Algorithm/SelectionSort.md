## 선택정렬
- 배열을 순회하면서 가장 작은값을 찾고
- 그 값을 가장 맨 앞의 값과 swap
- 이걸 반복하면서 앞에 정렬된 숫자는 제외하고 정렬
- 0번째 인덱스를 선택한 상태에서 배열의 최소값을 찾고 index 값 교환
- 1번째 인덱스를 선택하고 나머지 배열중 가장 작은 값을 찾고 index 값 교환
- 시간복잡도는 동일한 배열을 중첩반복문을 사용하여 버블정렬과 동일한 `O(N2)(제곱)`
- 버블정렬보다는 데이터 교환횟수가 적기때문에 버블정렬보다는 효율적
- 배열내에서 즉 제자리 정렬이라 별도의 메모리공간을 필요로 하지 않는다.

```js
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
}
```

1 싸이클이 끝날때마다 가장 앞자리부터 정렬된상태로 채워짐