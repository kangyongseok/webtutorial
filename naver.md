html 과 css 둘다 코드가 해석될때 위에서부터 아래로 읽어내려간다.
css 에서는 중요하게 알고 넘어가야할 개념들이 있다.

1. css 는 브라우저마다 스타일이 다르게 적용될 수 있다.
2. html 태그는 각각의 고유한 스타일을 갖고있다.
3. 브라우저마다 모두 동일하게 보여주기위해서는 초기화 스타일이 필요하다.
4. CSS 에는 우선순위가 존재한다.
5. float 의 본래 목적은 레이아웃을 구성하는데 사용하는것이 아니다.
6. 레이아웃은 flex 와 grid 로 잡는것이다.

> 여기서는 외부 스타일시트를 html 에 불러와서 사용하는 방식을 쓴다. 이런 방식이 유지보수면에서도 또 파일을 관리하는 면에서도 훨씬 효율적이다.

CSS 는 html 로 작성한 뼈대에 콘크리트를 붓고 페인트칠을 하면서 구조를 잡아나갈때 사용한다. 

html 에 스타일을 입힐때 html 에 요소들을 선택자로 갖고와 사용할 수 있는데 이때 다양한 선택자를 사용하는 방법이 있다.

1. 태그명
```css
div { }
p { }
img { }
```

2. class name
```css
.header_area { }
.main_menu { }
.footer_area { }
```

3. id
```css
#wrap { }
```

4. 자식전체선택
```css
.header_area div { }
.header_area p { }
```

5. 가상선택자
```css
.header_area div:first-child { }
.header_area div:last-child { }
.header_area div:nth-child(2) { }
.header_area div:after { }
.header_area div:before { }
```

6. 직속 자식만 선택
```css
.header_area>div { }
.header_area>p { }
```

이외에도 다양한 선택자를 사용하는 방법이 있지만 여기서 모든걸 나열하기보다는 스타일을 작성해 나가면서 하나씩 적용해보려고 한다.
우선 스타일도 마찬가지이지만 하나의 스타일을 만들고 레이아웃을 잡기위한 완벽한 정답은 존재하지않는다.
다만 어떤게 좀더 유지보수하기 편하고 어떤게 좀더 효율적으로 코드라인수를 늘리지않고 중복을 줄이고 예상치못한 이슈를 발생시키지 않을지 고민하면서 그러한 방향으로 나아가는것이 중요하다.

**TIP**
- 정답은없다.
- 유지보수하기 편하게
- 중복을 줄이고
- 라인수를 줄여서 가독성을 높이고
- 작성순서와 규칙을 정해서 그 규칙을 따르고
- 미래에 발생할만한 이슈에 대해서 미리 처리 및 방지