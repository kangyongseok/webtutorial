## big-O
big-O 줄여서 그냥 O 로 보통 읽는데 알고리즘의 효율성을 나타내는 지표이다. 이때 알고리즘의 효율성을 나타내는 기준으로 가장 최악의 상황으로 비교한다. 
- O(1)
- O(log N)
- O(N)
- O(N log N)
- O(N2)
- O(2N)  

좀더 다른 용어로 표현하자면 시간의 상한과 공간의 상한을 표현할 수 있다. 이때 시간의 상한은 시간복잡도를 나타내고 알고리즘이 실행되는데 걸리는 시간의 최대 상한선을 말한다. 그리고 공간복잡도는 메모리를 얼마나 사용하는지에대한 상한선을 말한다. 
  
위에 나열한 목록 맨 위에부터가 가장 효율적인 순서이다.
  
```js
function sum (n) {
    if (n <= 0) {
        return 0;
    }
    return n + sum(n - 1)
}
sum(4)
```
위 코드는 재귀용법을 단순하게 표현한 함수인데 sum 함수는 n 이 0이 될때까지  `sum()` 을 반복적으로 호출한다. 호출을 할때마다 자바스크립트의 `실행컨텍스트 스택` 에 쌓였다가 호출이 끝나면 덧셈을 실행한다.
  
위코드에서 시간복잡도와 공간복잡도는 각각 `O(n)` 이 된다. 인자로 넘겨준 숫자만큼 메모리를 사용하고 숫자만큼 반복실행하기때문이다.

```js
function pairSumSequence(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += pairSum(i, i + 1)
    }
    return sum
}

function pairSum(a, b) {
    return a + b
}

pairSumSequence(4)
```

두번째 예제는 첫번째와 동일하게 네번 호출을 진행하지만 이 함수들이 호출스택에 동시에 존재하고있는것은 아니기때문에 공간복잡도는 `O(1)` 을 가진다.

## log N 수행시간
log N 은 이진탐색을 표현할때 많이 사용할 수 있다. 전화번호부를 예로 들 수 있는데 순차적으로 정렬되어있다는 가정하에 목록이 없는 전화번호부가 있다고 했을때 원하는 전화번호를 가장 빨리 찾는 방법중에 절반씩 나눠가면서 찾는 방법이 있다. 
  
전화번호부의 중간을 기준으로 찾으려는 전화번호가 앞쪽에 포함인지 뒤쪽에 포함인지 확인하고 만약 앞쪽이라면 그 앞쪽의 다시 중간을 나눠서 이 행위를 반복한다. 
  
N 개의 데이터는 `N/2` 가되고 한단계 더 지나면 `N/4` 개로 줄어들게된다. 

## 시간복잡도 계산하기

```js
let sum = 0;
let product = 1;
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
}
console.log(sum, product) // 15, 120
```

위 코드의 시간 복잡도는 O(N + N) 이고 이는 곧 O(2N) 이된다. 이떄 상수는 무시하게되면 O(N) 이라고 표현할 수 있다. 

```js
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j])
    }
}
```

위 코드는 `O(N2)(제곱)` 으로 표현할 수 있다. 배열만큼 반복하면서 그 횟수만큼 또 배열을 반복하는 중첩반복문이기 때문이다.
  
그렇다면 중첩반복문일때 항상 `O(N2)(제곱)` 이 되는가? 라고한다면 꼭 그렇지는 않다. 일단 아래의 두 예제를 비교하고 어떤 시간복잡도를 가질지 생각해보는건 꽤 흥미롭다.

```js
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[i], arr[j])
    }
}
```

```js
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] < arr2[j]) {
            console.log(arr1[i], arr2[j])
        }
    }
}
```

첫번째는 기존의 중첩반복문에서 내부반복문의 시작이 `i + 1` 부터 시작하고 두번째는 동일한 배열이 아닌 서로 다른 배열로 중첩을 이루어 반복문을 실행한다는것이다.
  
첫번째 예제의 시간복잡도를 표현하면 `O(N2)(제곱)` 으로 기본 중첩 반복문과 동일하고 두번째는 `O(ab)` 의 시간 복잡도를 가진다고 표현할 수 있다.
  
첫번째는 두번째 중첩반복문이 i + 1 부터 시작하지만 사실 이건 전체수행시간에 큰 부분을 차지하지않을뿐더러 풀이를 해보면 결국 `O(N2)(제곱)` 으로 수렴하는 결과가 나온다.
  
두번째는 다른 중첩반복문들과 동일한 수행시간을 가질거라고 생각할 수 있는데 여기서 중요하게 봐야할점은 `서로다른 두개의 배열` 이라는것이다. 이전 다른 예제는 하나의 배열로 중첩반복문을 이루기때문에 N 개 증가하면 N 이 증가한다. 그러나 서로다른 배열은 서로 다른 배열의 갯수를 가질 수 있기때문에 O(ab) 로 표현될 수 있다.