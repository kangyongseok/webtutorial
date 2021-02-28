## 1주차
## HTML 태그 또는 엘리먼트의 종류
html의 태그 종류로는 크게 
- 블록요소
- 인라인요소

두가지로 나눌 수 있습니다.  
블록요소란 태그 하나하나가 블록처럼 쌓인다고해서 붙여진 이름입니다.

```html
<div></div>
<p></p>
```
위의 두가지가 대표적인 블록요소들인데 특징은 웹상에서 한 라인당 하나의 블록을 가집니다.  
[block element](https://kangyongseok.github.io/webtutorial/blockElement.html)

  
인라인 요소란 딱 정해진 컨텐츠의 사이즈만큼만 넓이를 가지기때문에 블록처럼 쌓이는것이 아닌 옆으로 나열되는 요소들을 말합니다.

```html
<span></span>
<a></a>
<img>
```

위에 나열한 요소들이 대표적인 인라인요소입니다.  
[inline element](https://kangyongseok.github.io/webtutorial/inlineElement.html)

## HTML 작성방법
html 은 코드니 요소니 엘리먼트니 처음보는 용어들이 나오긴하지만 원래 목적은 웹에서 문서를 작성하기위함이었습니다. 한글이나 워드는 내 로컬피씨에서 문서를 작성하게되는데 이건 나만 볼 수 있습니다 하지만 웹에서 작성된 html 로된 문서는 웹서버에 올리면 어디서든지 누구나 볼수있게 되는거죠.
  
그래서 html 의 여러 요소 태그들은 문서를 작성하면서 제목, 부제목, 강조, 밑줄, 폰트사이즈, 폰트의종류, 색상, 배경넣기 등 을 넣는것과 동일한 역할을 수행해줍니다.

```html
<h1>제목</h1>
<h2>부제목</h2>
<p><strong>개요</strong></p>
<div>
    <span style="text-decoration: line-through;">
        동해 물과 백두산이 마르고 닳도록
    </span>
    하느님이 보우하사 우리나라 만세.
    <span style="color: pink">무궁화</span> 삼천리 화려 강산
    대한 사람, 대한으로 길이 보전하세.
</div>
<a href="www.naver.com">네이버</a>
```

[실행화면](https://kangyongseok.github.io/webtutorial/document.html)
  
이처럼 본래 목적은 웹에서 문서를 보이게함이고 태그의 이름들또한 문서작성시 필요한 기능들과 비슷한 역할을하는것과 연결되어있습니다.

```html
h1 = head1 제일 큰 제목
h2 = head2 그 다음 제목표시
h3 = head3 그 다음 제목
strong = 강조(굵음표시)
a = 앵커라고 읽으며 주로 링크연결시 사용
div = 블록요소에서 아무의미를 가지지않는 요소
span = 인라인요소에서 아무 의미를 가지지 않는요소
```

현재는 이러한 태그들을 이용하여 다양한 웹페이지 화면을 보여주고있지만 그 근간은 웹에서 작성되는 문서라는걸 잊지 않으시면 됩니다.


## 짝지어다니는 요소들
위에 나오는 블록요소와 인라인요소들처럼 개별적으로 사용되는것들도 있지만 웹 표준상 무조건 함께 사용되어야하는 태그들이 몇가지 있습니다.
- form + input
- ul + li,
- ol + li
- table + tr, td, th
- select + option

위의 목록중에서 + 를 기준으로 왼쪽에 있는 태그는 부모영역태그이고 오른쪽에 나열된 태그들은 부모요소내에서 자식요소로 무조건 등장해야만 하는 태그들입니다.
  
부모요소없이 사용해도 페이지상엔 정상적으로 보여질순있는데 웹표준에 어긋나는 사용법이고 서로 다른 브라우저간에 기기간에 잘못 해석될여지를 남겨두는것과 같습니다.

```html
<form>
    <input>
</form>

<!-- ================= -->

<ul>
    <li>순서가 정해지지않은 목록</li>
</ul>

<!-- ================= -->

<ol>
    <li>순서가 있는 목록</li>
</ol>

<!-- ================= -->

<select>
    <option></option>
</select>

<!-- ================= -->

<table>
    <tr>
        <th></th>
    </tr>
    <tr>
        <td></td>
    </tr>
</table>
```

[partner tag](https://kangyongseok.github.io/webtutorial/partnerTag.html)



## 태그의 속성
태그중에서 몇몇 태그들은 그들만의 별도의 속성을 갖고있는 태그들이 존재합니다
  
 **이미지**
```html
<img src="이미지주소" alt="이미지가 안나올경우 보여질 설명" />
```

이미지같은경우 다른 태그들과는 다르게 뒤에 닫는 다른 태그가 안나오고 단일로 쓰일수있으며 img 를 쓰기위해 꼭 필요한 속성은 위와같습니다.
- src : 이미지의 저장주소
- alt : 이미지가 네트워크장애로 나오지않을때 여기에 적힌 텍스트로 대체할 수 있습니다.

**링크**
```html
<a href="https://naver.com" target="_blank">네이버</a>
```

a 태그는 링크의 역할을하며 href 에 주소입력으로 클릭시 원하는 페이지로 이동시킬 수 있습니다.
- href: 이동할 페이지 주소
- target: 이동할 페이지의 창을 띄우는 방법
- _blank: 새탭띄우기


## 부모요소와 자식요소
html 에서 각 요소들은 부모요소와 자식요소들을 가지게 될수도있는데 이는 상대적으로 판단할 수 있다.

```html
<div>
    <p></p>
</div>
```

위의 코드에서 div 는 p 의 부모요소이고 p는 div 의 자식요소가 된다. 부모와 자식의 관계 그리고 형제관계는 css 할때 매우 중요하게 다뤄지므로 그 관계를 잘 이해하고 있어야 한다.

```html
<div>
    <p></p>
    <p></p>
    <div></div>
</div>
```

위와같이 같은 블록태그 끼리라면 얼마든지 서로간에 자식요소와 부모요소로 사용될 수 있다.

```html
<!-- 사용하면 안될 패턴 -->
<span>
    <div></div>
</span>
```
위와같은 경우는 인라인요소인 span 내부에 블록요소인 div를 넣은 경우인데 이는 웹표준에서 위반되는 방식이라 사용하면 안될 패턴이다. 물론 저대로 동작은 하지만 유지보수 측면이나 레이아웃을 짤때 여러가지 문제를 일으키는 원인이 되기도 한다.




### 구조짜기
![sample1](https://github.com/kangyongseok/webtutorial/blob/main/img/sample1.png?raw=true)
![sample2](https://github.com/kangyongseok/webtutorial/blob/main/img/sample2.png?raw=true)
![sample3](https://github.com/kangyongseok/webtutorial/blob/main/img/sample3.png?raw=true)
![sample4](https://github.com/kangyongseok/webtutorial/blob/main/img/sample4.png?raw=true)

## 웹표준 검사
[웹 표준 검사](https://validator.kldp.org/)

만약 내가 짜고있는 마크업과 구조가 제대로 된것인지 의심스럽다면 웹표준검사를 통해서 확인할 수 있다. 해당검사는 위와같은 인라인요소 내에 블록요소를 사용했거나 해당 요소에서 필수적으로 넣어야하는 속성이 빠져있거나 까먹고 닫지않은 태그가 있거나 하는 부분들을 체크해서 알려준다.


