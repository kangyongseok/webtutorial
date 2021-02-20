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
- ul + li, ol, dl
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
    <li></li>
</ul>

<!-- ================= -->

<ul>
    <ol></ol>
</ul>

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

