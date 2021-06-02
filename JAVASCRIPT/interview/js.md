## 자바스크립트 원시타입
자바스크립트의 원시타입으로는 총 6가지가 있다.
- number
- string
- boolean
- null
- undefined
- Symbol (ES6 에서 추가)

### number
숫자 타입은 다른 언어와 다르게 한가지 숫자 타입만 존재하며 정수와 실수의 구분이 없다.
```js
const number = 2.00
console.log(number) // 2
```

### Symbol
심볼은 ES6에서 새로 추가된 타입으로 사용법은 함수를 호출하여 생성한다. 심볼은 같은값으로 정의했더라도 절대 같은값이 존재할 수 없는 유일무이한 값이다. 이 심볼로 할 수 있는일은 객체의 유일한 프로퍼티키를 만들때 사용한다.
```js
const name1 = Symbol('kang')
const name2 = Symbol('kang')
console.log(name1 === name2) // false

typeof name1 // "symbol"
```
심볼값은 외부로 노출되지않아 확인할 수 없다.

- 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다.
- 불리언 타입으로는 암묵적 변환이 가능해서 if 문으로 확인 가능하다.
- 심벌값을 프로퍼티키로 사용하여 생성한 프로퍼티는
- for...in 문 
- Object.keys
- Object.getOwnPropertyName 메서드로 찾을 수 없다.

```js
const obj = {
    [Symbol('symbol1')]: 1
}
for (const key in obj ) {
    console.log(key)
}

console.log(Object.keys(obj))

console.log(Object.getOwnPropertyNames(obj))
```

### 심벌 키 벨류 찾는 법
```js
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(symbol1) ]
const symbolKey = Object.getOwnPropertySymbols(obj)[0] // Symbol(symbol1)
console.log(obj[symbolKey]) // 1
```

## 호이스팅
호이스팅을 끌어올림이라고도 하며 변수의 선언과 사용의 순서가 뒤바뀌어도 에러 없이 동작하는 방식에 대해 해석할때 많이 사용하는 용어이다.
  
실제로 끌어올려지는것은 아니고 자바스크립트에서의 런타임이전에 자바스크립트 엔진에 의해서 변수들을 찾아 선언단계가 먼저 실행된다.

```js
console.log(name) // undefined
var name = 'kang'
```

```js
console.log(name) // ReferenceError: name is not defined
let name = 'kang'
```

```js
console.log(name) // ReferenceError: name is not defined
const name = 'kang'
```

그러나 정상적으로 동작하던 시절은 let, const 가 나오기전 var 식별자만 사용되던 시절이고 let 이나 const 는 에러를 출력한다. 
  
에러가 나온다고해서 호이스팅이 발생하지않는것은아니다. 해당 식별자들의 차이는 선언과 초기화가 동시에 진행되느냐 선언과 초기화가 분리되어 진행되느냐의 차이이다.
  
선언과 초기화의 이 공백영역을 일시적사각지대(TDZ) 라고 부른다. 선언으로 호이스팅은 발생하지만 런타임 즉 실행단에서 초기화가 진행되기때문에 사각지대에서 에러를 출력하게된다.
  
여기서 let 과 const 의 차이점또한 존재하는데 const 는 선언과 동시에 초기화값을 할당해주어야만한다. const 는 let 처럼 재할당이 불가능한 식별자이기때문에 초기값을 선언과 동시에 지정해야한다.

## 클로저
> 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
```js
const x = 1;
function outerFunc() {
    const x = 10;
    function innerFunc () {
        console.log(x) // 10
    }
    innerFunc();
}
outerFunc();
```

위의 예제에서 `innerFunc` 함수는 `outerFunc` 함수 내부에 선언되었다. 때문에 `outerFunc` 내부에 선언한 변수 x 를 참조하여 10을 리턴한다.

```js
const x = 1;
function outerFunc () {
    const x = 10;
    innterFunc()
}
function innerFunc () {
    console.log(x); // 1
}

outerFunc()
```

두번째 예제는 `outerFunc` 와 `innerFunc` 둘다 전역에 선언되어있고 호출은 각각 전역과 `outerFunc`
 내부에서 호출하고 있다. 이때 `innerFunc` 에서 확인한 x 의 값은 전역의 변수가 갖고있는 1이 된다.

### 렉시컬 스코프
자바스크립트의 엔진은 함수를 호출 기준이 아니라 어디서 선언했는지를 기준으로 상위 스코프를 결정하는데 이를 렉시컬 스코프라고 부른다.

### 클로저와 렉시컬 환경
```js
const x = 1;
function outer () {
    const x = 10;
    const inner = function () { console.log(x) };
    return inner;
}

const innerFunc = outer();
innerFunc() // 10
```

원래대로라면 자바스크립트의 함수는 호출되면 한번 실행되고 생명주기를 마감한다. 즉 위의 코드는 outer 함수를 실행하고 마감되었어야하지만 innerFunc 를 실행했을때 outer 가 갖고있는 값을 리턴하게된다. outer의 실행컨텍스트는 스택에서 제거되었지만 지역변수로 있던값은 inner 에 의해서 참조된상태로 존재하고 그 값을 리턴하는데 이러한 함수를 클로저라고 부른다.



## 실행 컨텍스트


## 프로토타입



## this
this는 자기 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조변수다. this 를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

### 자기 자신이 속한 객체
```js
const cat = {
    name: '장화신은 고양이',
    getName() {
        return this.name + 1
    }
}
console.log(cat.getName()) // "장화신은 고양이1"
```

### 자신이 생성할 인스턴스의 프로퍼티나 메서드참조
```js
function Car (name) {
    this.name = name
}

Car.prototype.getName = function () {
    return this.name + 1
}

const car1 = new Car('벤츠');
console.log(car1.getName()) // 벤츠1
```