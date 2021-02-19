## 웹 개발 세팅
1. [git install](https://git-scm.com/downloads)
2. [git install tutorial](https://coding-factory.tistory.com/245)
3. [github 가입](https://github.com/)
4. [visual studio install](https://code.visualstudio.com/)
5. [크롬브라우저 install](https://www.google.com/chrome/?brand=BNSD&gclid=Cj0KCQiA4L2BBhCvARIsAO0SBdYXP1HsuHB0k0TFOz2gHnh90Zcd7yDX2WwEFejD2kGElDAS2ORSFiAaAmxoEALw_wcB&gclsrc=aw.ds)

git 은 버전관리툴로 프로젝트의 버전관리와 원격저장소와의 연계를 통해 프로젝트를 저장하고 공유하고 협업하는데에 사용한다.
  
github 은 원격저장소로 주로 소스코드를 저장하는것 이외에도 여러가지 기능들을 제공하는데 그중에 하나가 정적웹사이트를 만들어 올릴 수 있다는 것이다.

Visual Studio Code 는 코드를 작성하기위해 여러가지 편의성을 제공해주는 IDE이다. 코드는 메모장으로 작성해도 되지만 자동완성이나 코드를 색상별로 구분하게 해주거나 자동 정렬을 해주거나 하는 기능들이 없어서 가독성도 떨어지고 사용성이 불편하다. 이러한 부분을 도와주는 도구라고 볼 수 있다.
  
크롬브라우저는 개발자도구에서 디버깅하기위한 여러가지 기능을 제공하고있어 많이 사용하는 브라우저입니다. 또 웹을 개발하기위한 최신기능들을 지원하는 브라우저이기떄문에 많이 사용한다.

## 필요한 사전 지식 학습

### HTML(HyperText Matkup Language)
주로 마크업언어라고 하며 웹페이지를 구성하는 가장 기본적인 뼈대역할을 한다고 볼 수 있다. 태그, 또는 엘리먼트라고 불리우는 요소들을 사용하여 웹 페이지의 뼈대를 만들 수 있습니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <!-- 여기서부터가 눈에 보이는 화면 작성 -->
</body>
</html>
```

위의 형태가 가장 기본적인 html 의 형태인데 저상태로 html 을 실행해보면 아무것도 화면이 나오지 않습니다. 이유는 `<body>` 태그 내부에 작성된 내용부터가 화면에 보여지기 때문입니다.
  
그렇다면 화면에 보이지도않는데 저것들은 무엇을 하는건지 차근차근 보도록 하겠습니다.

```html
<!DOCTYPE html>
```
웹 브라우저가 html 이라는 파일을 읽어들이도록 하기위해서 필요한 선언문입니다. html 의 요소는 아니지만 이 파일은 `document type 이 html 인 마크업언어를 사용할것이고 그 버전은 html5 를 사용한다` 라고 선언하는것과 같습니다.

```html
<html lang="en">
```
html 은 가장 최상위 요소(= 태그, 엘리먼트) 입니다. 내부에 있는 `lang="en"` 자체는 시각적으로 보았을때 큰 영향을 끼치는 부분은 아닌데 웹창시자의 말을 빌리자면 웹은 어디에서든 누구든지 접근 가능해야한다는 목적에 따라서 시각적, 청각적, 신체적 으로 불편하신 분들도 충분히 사용할 수 있어야하는 것에 역할을 합니다.
  
웹 페이지를 시각이 아니라 청각으로 이용해야하는 사람들에게 언어의 설정은 스크린리더같은걸로 읽어질때 영어로된 text를 한글로 번역할수 있도록 해줍니다.
  
`lang="en"` 이러한것처럼 태그내에 key=value 형태로 사용되는것을 태그의 속성 또는 엘리먼트의 속성이라고 부릅니다.

```html
<head>
    <title>Document</title>
</head>
```

`<head></head>` 태그 내부에는 기본적으로 `title` 이라는 태그가 포함되고 웹에서 보이지는 않지만 구글이나 네이버에서 웹사이트에대한 정보를 수집할때 필요한 정보들을 포함시킬 수 있습니다. `title` 은 웹의 상단 탭에 웹의 제목으로 노출될 텍스트를 지정하는 태그입니다.

```html
<body>

</body>
```

`body` 에는 이제 사용자가 볼 웹 페이지의 화면에 보여질 내용들을 코드로 작성하여 그려줄수 있는 영역입니다.
  

여기까지 보다보면 몇가지 공통점이 있는데 태그 혹은 엘리먼트라고 불리우는 것들은 `<head>` 열린태그와 `</head>` 닫힌태그로 구성되어있고 그 내부에 컨텐츠를 입력하여 표현하는것을 볼 수 있다.

### CSS(Cascading Style Sheets) 
스타일시트 언어라고 하며 영어를 그대로해석하자면 폭포수로 해석되는데 css 작성법이 위에서부터 아래로 폭포와 같다해서 붙여지게된 이름입니다.
  
HTML 이 웹의 뼈대를 이루는 마크업언어라면 CSS 는 이 앙상한 뼈대에 살을입히고 디자인하고 꾸미고 보기좋게만드는 역할을 합니다. 

```css
div {
    width: 10px;
}
```

위의 코드를 해석하자면 선택자 div 태그에 넓이를 10px 을 준다 라고 볼 수 있습니다. 
  
작성규칙은

```css
body {}
div {}
p {}
```

이것처럼 선택자와 중괄호를 사용하여 중괄호 내부에 스타일을 작성해줍니다.
  
### html 과 css 의 합체
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
        div {
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>

</head>
<body>

    <div></div>
    
</body>
</html>
```

여지껏 본것중에 가장 코드 길이가 길어서 당황스러울수도있는데 
`<style></style>` 과 `<div></div>` 부분만 추가되었습니다.
  
이렇게 html 파일 내부에 스타일과 태그들을 동시에 사용할 수 있습니다. 대신에 코드라인수가 길어지는 단점이있고 보기에 좀 불편한부분이 있습니다.
  
일단 대략적으로 이렇게 사용하는구나만 보고 넘어가고 html로 다시 넘어가도록 하겠습니다.

## HTML 태그 또는 엘리먼트의 종류
