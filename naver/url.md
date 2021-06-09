html 마크업 코드를 보면서 조금 불편하다 라는 생각 들지 않나요? 그냥 메인페이지 하나 만드는데 컨텐츠에 따라서 한페이지의 라인수가 엄청 길어집니다. 라인수가 길어지면 가독성이 떨어지고 유지보수할때도 시간을 많이 잡아먹는 원인이 됩니다. 

자바스크립트를 사용한다면 html 에서의 라인수를 줄이고 대체할 수 있습니다.

## menu
네이버 메뉴의 공통점을 보면 `li` 태그로 이루어져있고 내부에 `a` 태그로 링크가 걸려있습니다. 즉 텍스트만 다를뿐 동일한 태그를 사용하여 나열되어있습니다. 이 메뉴 부분은 js 로 처리하고 html 에서는 제거하도록 하겠습니다.


### 초기 데이터 지정
```js
const fixMenu = ['메일', '카페', '블로그', '지식인', '쇼핑', 'TV']
const favoritMenu = ['사전', '뉴스', '증권', '부동산', '지도', '웹툰']
```

우선 메뉴의 텍스트데이터를 담은 배열을 하나씩 만들어 줍니다. 메뉴의 색상에 따라 두가지로 리스트를 따로 두었기 때문에 배열또한 두가지로 나누어 `const` 라는 식별자를 사용하여 변수를 선언하고 초기화를하여 초기값 데이터를 지정해 주었습니다.

### js 적용
```html
<head>
    <script src="./js/main.js"></script>
</head>
```
`head` 태그 내부에 스크립트 파일을 불러옵니다. html 은 브라우저엔진에 의해서 파싱되고 돔트리로 구성되고 렌더링 되면서 위에서부터 아래로 트리노드구조형태를 읽어옵니다. 그리고 스크립트태그를 만나게되면 html 의 렌더링 과정을 모두 중단하고 스크립트에 모든 동작을 넘깁니다.
  
그러나 우리는 js 로 돔을 조작할것이기때문에 html 의 렌더링 과정이 끝난 다음에 js 파일이 실행되어야 에러없이 정상적으로 돔을 컨트롤 할 수 있기때문에 이에대한 처리를 해주어야 합니다.

```js
window.onload = function () {
    // 여기서부터 코드 작성
}
```

따라서 위와같은 전역객체 window 가 갖고있는 onload 메소드를 사용하여 html 이 렌더링이 끝난다음에 스크립트 파일이 실행되도록 할 수 있습니다.
  
배열로 선언한 두 변수는 돔조작과 상관없이 데이터만 갖고있기때문에 함수내부에서 선언해주지 않아도 됩니다.

### DOM 조작
이제 필요한설정은 갖춰졌고 어떻게 html 에 자바스크립트로 메뉴를 적용할 수 있는지 보겠습니다.  
우선 필요한 내용을 글로 적어보겠습니다.  
1. 배열 데이터를 가공하여 원하는 요소로 html 형태로 만든다.  
2. html 로 만든 형태를 html 에 원하는 태그의 자식요소로 넣어준다.  

```js
const fixMenu = ['메일', '카페', '블로그', '지식인', '쇼핑', 'TV']
const favoritMenu = ['사전', '뉴스', '증권', '부동산', '지도', '웹툰']

window.onload = function () {
    fixMenu.map(text => {})
}
```

배열을 조작해야하는데 이때 사용하는게 배열메서드이다. 자바스크립트의 배열은 선언과 동시에 따로 설정해주지않아도 프로토타입으로 상속받은 여러가지 메서드들을 사용할 수 있다. 그중 자주 사용하게되는 `map` 메소드를 배열데이터를 가공하기위해 사용한다.
  
map 메서드의 특징은 콜백함수를 가지며 원본배열을 훼손하지않고 새로운 배열을 리턴하는 특징이 있다. 즉 콜백함수 내에서 어떤 로직을 작성하면 해당 로직을 수행한 결과데이터를 또다른 하나의 배열로 만들어 리턴해준다.
  
위의 코드는 `fixMenu` 를 map 메서드로 순회하면서 text 라는 이름으로 지정한 변수에 0번째 인덱스값부터 순차적으로 담는 역할을 한다.
  
```js
window.onload = function () {
    fixMenu.map(text => {
        return `<li><a href="#">${text}</a></li>`
    })
}
```

화살표함수를 콜백함수로 넘겨서 새로운 배열을 생성해주려면 중괄호를 사용할경우 return 이라는 식별자를 명시해 주어야 한다. 만약 return 을 사용하지않을거라면 아래와같이 중괄호를 생략하고 사용하면된다.

```js
window.onload = function () {
    const fixLists = fixMenu.map(text => `<li><a href="#">${text}</a></li>`);
    console.log(fixLists)
}
```

또다른 변수를 하나 선언하고 map 메서드를통해 새로 생성된 배열데이터를 할당해준다. 이때 html 형태처럼 만들기위해 사용한것은 일반적인 따옴표가 아니라 `백틱` 이라고 부른다. 백틱을 사용하게되면 저렇게 html 처럼 생긴 스트링을 작성하면서 그 내부에 `${}` 를 사용하여 자바스크립트 코드를 사용할 수 있다.
  
배열데이터는 두개였기에 같은 방식으로 가공한 데이터를 하나 더 만들어 준다.

```js
window.onload = function () {
    const fixLists = fixMenu.map(text =>`<li><a href="#">${text}</a></li>`).join('')
    const favoritLists = favoritMenu.map(text => `<li><a href="#">${text}</a></li>`).join('')
}
```

여기서 `join` 또한 배열에서 사용할 수 있는 메서드중 하나인데 map 메서드로 리턴한 값이 배열이기때문에 바로 체이닝을 통해 또다른 배열 메서드 사용이 가능하다.
  
조인이 없다면 배열자체가 스트링형태로 html 에 노출되기때문에 배열에 있는 쉼표까지도 화면에 보이게 된다. 조인은 배열을 순회하면서 하나의 스트링데이터로 만들어줘 쉼표가 사라지게된다.

### innerHTML
이제 html 에 ul 에 가공한 데이터를 넣으려고한다.

```js
const fixUl = document.querySelector('.fix_menu');
const favorittUl = document.querySelector('.favorit_menu');
const fixLists = fixMenu.map(text =>`<li><a href="#">${text}</a></li>`).join('')
const favoritLists = favoritMenu.map(text => `<li><a href="#">${text}</a></li>`).join('')
fixUl.innerHTML = fixLists
favorittUl.innerHTML = favoritLists
```

`querySelector` 는 자바스크립트에서 css 에서 사용하던 선택자처럼 동일하게 선택자를 사용할 수 있도록 해준다. 이 전에는 getElementById, getElementByTagName 등 태그나 속성에 따라 서로 다른 메서드를 사용해야만 했다.
  
이제 데이터를 가공했고 이 가공한 데이터를 어디에 넣을지 요소까지 갖고왔다. 마지막으로 이 가공한 데이터를 해당 요소에 넣어주기만하면되는데 이때 사용하는 객체가 `innerHTML` 이다. 말 그대로 내부에 html 을 넣어주는 객체다.

```html
<ul class="fix_menu"></ul>
<ul class="favorit_menu"></ul>
```

이제 메뉴의 li 를 제거하더라도 화면에 정상적으로 메뉴가 보이는것을 확인 할 수 있다.
