html 에서도 메뉴를 작성할때 링크태그를 아래와같이 작성했었다.
```html
<li><a href="#">...text</a></li>
```
js 로 html 의 메뉴를 대체하긴했는데 문제는 이 링크에 붙은 # 대신 링크주소가 들어가야 맞는 동작이고 사용법이다. 그렇다면 js 로 만든 메뉴에 서로 다른 다양한 링크를 어떻게 적용할 수 있을까?

## 배열
메뉴데이터들을 배열로 만들어주었던것처럼 링크도 배열로 만들어주면 될것같다.
```js
const fixUrl = ['www.mail.com', 'www.naver.com', 'www.google.com', 'www.youtube.com', 'www.shopping.com', 'www.tv.com']
```
링크듣 메뉴와 동기화시켜 적용하기전에 배열의 값에 접근하는 방법을 알아야한다. 배열은 왼쪽부터 순서대로 index 값을 갖는데 프로그래밍에서의 첫번째는 1이 아니라 0이다. 그래서 배열의 첫번째 값이 접근하기위해서는 배열의 0번째 인덱스에 접근해야한다.

```js
console.log(fixUrl[0]) // www.mail.com
```

위와같이 배열은 대괄호를 사용하여 인덱스값을 지정해줌으로 배열의 개별값에 접근할 수 있다.

## 적용
기존 스크립트에서는 원하는 값의 출력이 한줄로 가능했기때문에 한줄로 작성했는데 이번엔 새로운 값의 추가가 필요하기때문에 중괄호를 추가하고 그 안에서 코드를 작성하려고한다. 이때 return 이란 키워드를 사용해야 새로운 배열이 생성된다.

```js
const fixLists = fixMenu.map((text, i) => {
    return `<li><a href="${fixUrl[i]}">${text}</a></li>`
}).join('')
```

배열 메서드들의 특징중 하나가 두번째인자로 index 값을 받아올수 있다는 점이다. 그래서 이 index 를 활용하면 url 배열 데이터를 다시 메서드를 사용하지않더라도 원하는 값을 얻을 수 있다.

## 문제점
여기서의 문제점은 만약 누군가가 혹은 미래의내가 url 이나 메뉴의 순서를 변경하거나 다른 메뉴로 교체되었을때 잘못된 링크가 매칭될 수 있다는점이다. 
  
그리고 url 데이터와 메뉴데이터가 서로 다른 페이지나 다른 라인에 떨어져있다면 그 순서와 연관성을 매칭시키기가 매우 곤란해진다. 즉 메뉴와 url 이 매칭되도록 그룹화를 시켜줄 필요성이 있겠다. 이때 사용할수있는것이 바로 객체이다.

## 객체
자바스크립트는 매우 강력한 객체지향프로그래밍을 지원한다. 사실상 배열도 객체, 함수도객체, 객체도 객체다. 자바스크립트의 배열은 일반적인 배열이 아닌 해쉬맵형태의 배열로 자료구조에나오는 배열형태와는 다르다. 이 다른점때문에 자바스크립트의 배열에는 한변에 다양한 값들을 포함할 수 있다. 그중에는 객체도 포함된다.

```js
const cat = {
    name: '페르시안',
    age: 12,
} 
```

위와같이 객체는 중괄호를 사용하며 키와 밸류를 갖는다. 위와같은 객체의 특징을 활용하면 메뉴의 텍스트와 url을 묶어서 데이터를 사용할 수 있도록 할 수 있다.

```js
const fixMenu = [
    { label: '메일', url: 'www.mail.com' },
    { label: '카페', url: 'www.cage.com' },
    { label: '블로그', url: 'www.blog.com' },
    { label: '지식인', url: 'www.in.com' },
    { label: '쇼핑', url: 'www.shopping.com' },
    { label: 'TV', url: 'www.tv.com' },
]
```
데이터를 변형한 모습인데 배열내부에 텍스트가아닌 객체를 나열하여 그룹화를 시켰다.  
데이터가 변경되었으니 데이터를 활용하는 소스코드로 변경이 필요하다.

```js
const fixLists = fixMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')
```

달라진점은 배열로 순환하는데이터가 text 가 아니라 하나의 객체이므로 이름을 item 으로 변경하였고 url 데이터가 필요없기때문에 index 또한 필요없어 제거하였다. 그리고 객체의 값을 사용하기위해서는 체이닝사용할 수 있다.

## 전체코드

```js
const fixMenu = [
    { label: '메일', url: 'www.mail.com' },
    { label: '카페', url: 'www.cage.com' },
    { label: '블로그', url: 'www.blog.com' },
    { label: '지식인', url: 'www.in.com' },
    { label: '쇼핑', url: 'www.shopping.com' },
    { label: 'TV', url: 'www.tv.com' },
]
const favoritMenu = [
    { label: '사전', url: 'www.mail.com' },
    { label: '뉴스', url: 'www.cage.com' },
    { label: '증권', url: 'www.blog.com' },
    { label: '부동산', url: 'www.in.com' },
    { label: '지도', url: 'www.shopping.com' },
    { label: '웹툰', url: 'www.tv.com' },
]


window.onload = function () {
    const fixUl = document.querySelector('.fix_menu');
    const favorittUl = document.querySelector('.favorit_menu');
    const fixLists = fixMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')
    const favoritLists = favoritMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')
    fixUl.innerHTML = fixLists
    favorittUl.innerHTML = favoritLists
}
```

일단 네이버 예제로 진행할 수 있는건 여기까지다. 나머지 목록들도 객체로 구성해야할 갯수의 차이일 뿐이지 동일하게 반복되는 내용들에 대해서 객체화로 데이터를 만들고 내용을 넣을 요소를 가져와 데이터를 html 형태로 구성해주고 innerHTML 에 해당 값을 할당해주면 끝난다.
  
이런식으로 다양한 예제를 뼈대를 구성하고 스타일을 입히고 데이터화 시키면서 리팩토링하면서 익숙해지는거다. 다시한번 강조하자면 외우는것이 아니라 익숙해지는거다.