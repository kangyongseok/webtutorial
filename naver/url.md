[sample3 화면](https://kangyongseok.github.io/webtutorial/sample3/)

본격적으로 스타일을 적용하기에 앞서서 태그들은 각각의 고유한 default 스타일을 갖고있습니다. 앞서 애기한적이 었었던것같은데 그 스타일을 초기화하는 작업을 진행하도록 하겠습니다.
  
초기화의 이유는 여러 브라우저간에 약간씩 다르게 보여지는 기본 스타일을 사전에 초기화하여 동일한 스타일로 맞춰놓고 작업하기 위함입니다.
  
이러한 기본 스타일을 제거하거나 브라우저별로 동일하게 만들때 사용하는 두종류의 css 가있는데 
`normalize.css`, `reset.css` 이렇게 두가지입니다. 
  
  첫번째는 각 태그가 가진 기본 스타일을 존중하면서 브라우저간에 통일성을 맞춘것이고 후자는 지금 제가 할것처럼 그냥 스타일의 기본속성까지 초기화 시켜버리는 차이점이 있습니다.

## 스타일 초기화 코드 작성
```css
/* 초기화 */
* { /* 전체 선택자로 모든 태그에 동일한 스타일을 적용 */
    /* h1~h6., p, ul 등이 가진 간격속성 0으로 초기화 */
    margin: 0;
    padding: 0; 
    /* 넓이와 높이값이 적용될때 border 와 padding 값까지 포함된 넓이로 적용 */
    box-sizing: border-box;
}

ul {
    /* list 가 가진 표시 속성 제거 */
    list-style: none;
}

a {
    /* 링크태그사용할때 발생하는 밑줄 제거 */
    text-decoration: none;
}
```

우선 가장 많이 쓰일만한 속성위주로 기본 스타일을 잡아주고 시작합니다.

## header_area
헤더 영역의 스타일을 잡아보겠습니다. 우선 각각의 util 메뉴와 logo 영역은 위 아래로 배치되어있기때문에 별도의 레이아웃을 수정할 필요는 없을것같습니다.
  
### util_menu
유틸메뉴를 보면 메뉴가 옆으로 나열되어있습니다. 현재 우리의 화면은 위에서 아래로 출력이 되고있는데 예전에 쓰이던 float 이 아니라 flex-box 를 사용해서 레이아웃을 잡겠습니다.

> float 은 레이아웃잡을때 사용하라고 존재하는 속성이 아님. 한글이나 워드 문서파일에서 이미지와 텍스트를 정렬할때 이미지를 글자취급 하면 이미지의 위치를 기준으로 텍스트가 둘러싸는걸 볼 수 있는데 바로 이역할이다.

```css
#wrap {
    width: 100%;
}

.header_area {
    background: red;
}

.header_area .util_menu {
    background: yellow;
}

.header_area .util_menu ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
```

저는 레이아웃을 잡을때 항상 작업하는 영역 배열에 색상을 넣고 작업하는 방식으로 연습을 했었습니다. 이렇게 했을때 장점은 내가 작성한 코드가 블록에 어떤 영향을주고 어느영역이 얼마나 영역을 차지하고있는지 가시적으로 확인하면서 스타일 적용이 가능합니다.

```css
.header_area .util_menu ul {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
```

이렇게 밴더프리픽스를 붙여서 그걸 먼저 작성하고 밴더프리픽스가 붙지않은 본래의 스타일 속성을 아래쪽으로 위치시켰습니다. 
  
[관련글](https://blogpack.tistory.com/771)

flex 는 드디어 css에서 레이아웃을 위해 등장한 속성으로 정렬을 시키려는 태그들의 부모에 
`display: flex` 를 선언함으로써 시작할 수 있습니다.
  
위 스타일을 선언해주면 자동으로 좌우로 나열됩니다. 

```css
.header_area .util_menu {
    background: yellow;
    width: 1130px;
    margin: 0 auto;
}

.header_area .util_menu ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header_area .util_menu ul li {
    margin-left: 10px;
    font-size: 13px;
}
```

해당 영역을 완성시킨 css 입니다. 네이버에 보면 컨테츠영역의 넓이가 정해져있습니다. 그래서 저도 영역을 정해주고 `magin: 0 auto` 로 해당영역을 가운데로 위치시킵니다.
  
그리고나서 flex를 사용한 부모영역에서 `align-items: center;` 로 수평으로 가운데가 맞도록 정렬시키고
  
`justify-content: flex-end;` 로 1130px 로 정해진 넓이의 가장 오른쪽끝으로 이동시켰습니다.

### logo_area
로고영역도 로고와 검색창이 서로 위 아래로 나열되어있는데 이걸 옆으로 나열되도록 flex를 주도록 하겠습니다.

```css
.header_area .logo_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header_area .logo_area .logo {
    margin-right: 30px;
}

.header_area .logo_area input[type="text"] {
    width: 400px;
    height: 56px;
    padding: 10px;
    font-size: 20px;
    border: 3px solid green;
}
```

이번엔 해당 영역내에서 컨텐츠들이 전체적으로 가운데에 위치해야하기때문에 
```css
align-items: center;
justify-content: center;
```
둘다 센터를 잡아주었습니다. 순서대로 가로가운데 정렬 세로가운데 정렬입니다.
이제 header에 대한 레이아웃이 모두 잡혔으니 배경색상을 제거하고 다음 스타일 작업을 진행하도록 하겠습니다.

## 현재까지 작성한 전체 CSS 코드

```css
/* 초기화 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

#wrap {
    width: 100%;
}

.header_area {
    /* background: red; */
    width: 1130px;
    margin: 0 auto;
}

.header_area .util_menu {
    /* background: yellow; */
    margin: 10px 0;
    margin-bottom: 30px;
}

.header_area .util_menu ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header_area .util_menu ul li {
    margin-left: 10px;
    font-size: 13px;
}


.header_area .logo_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header_area .logo_area .logo {
    margin-right: 30px;
}

.header_area .logo_area input[type="text"] {
    width: 400px;
    height: 56px;
    padding: 10px;
    font-size: 20px;
    border: 3px solid green;
}
```