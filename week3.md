## 3주차 CSS(2)
css 로는 스타일을 정해주는것과 레이아웃 잡는것 이외에도 많은것을 해줄 수 있습니다. 예를들면 반응형 레이아웃을 짤때에도 css 를 활용할 수 있습니다.
  
반응형은 모바일기기륻 더 많이 사용하는 현시대에서 빼놓을 수 없는 스킬이라고 할 수 있습니다. 모니터의 사이즈별로 각 모바일의 화면 사이즈가 다르기때문에 그에맞춰서 화면 구성을하고 보여줘야할 필요성이 있습니다. 반응형은 여러 사이즈에 대처해야하기때문에 훨씬 신경써줘야 할 부분이 많습니다.

## 반응형 - 미디어쿼리
반응형 css 를 제작할때 검색할 수 있는 키워드는 미디어쿼리입니다.
```css
@media screen and (max-width: 400px) {
    body {
        color: blue;
    }
}
```
[반응형 예제](https://kangyongseok.github.io/webtutorial/CSS%20예제/ResponsiveStyle/index.html)

위 코드는 해석하자면 뷰포트 즉 사용자 눈에 보이는 화면의 사이즈가 400px 까지는 body 의 글씨가 파란색이고 400px이 넘어가면서부터는 해당 속성의 영향을 받지 않습니다.

> <span style="color: red">주의할점</span>  
> 미디어 쿼리내부에 작성하는 스타일도 상단의 스타일보다 우선순위를 잡고 속성을 줘야합니다.
  
예를들자면
```css
/* 잘못된 작성 */
.header h1 {
    color: red
}

@media screen and (max-width: 400px) {
    h1 {
        color: blue;
    }
}
```
이렇게는 상단에 작성한 h1 이 우선순위가 더 높기때문에 미디어쿼리 속성이 적용되지 않습니다.

```css
/* 올바른 작성 */
.header h1 {
    color: red
}

@media screen and (max-width: 400px) {
    .header h1 {
        color: blue;
    }
}
```
이렇게 최소한 동급 우선순위로 작성해줘야지만 속성을 정상적으로 적용할 수 있습니다.  
[반응형 미디어쿼리 안내서 MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries)

## 애니메이션
css 속성중 animation 을 사용하면 좀더 인터렉티브한 화면을 구성할 수 있습니다.

```css
div {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: move; /* 애니메이션 키프레임 이름 */
    animation-duration: 5s; /* 5초에 걸쳐서 움직임 */
    animation-iteration-count: infinite; /* 무한동작 */
}

@keyframes move { /* 지정한 이름으로 키프레임 생성 */
    from { /* 어디서부터 시작할건지 지정 */
        left: 0;
    }
    to { /* 어디까지 움직일지 마지막 지점 */
        left: 300px;
    }
}
```
[애니메이션 예제1](https://kangyongseok.github.io/webtutorial/CSS%20예제/AnimationStyle/index.html)
  
그러나 아직 약간 부자연스럽습니다. 왼쪽 0px 부터 300px 까지 이동은했지만 다시 돌아오는 애니메이션이 없기때문에 끊어지는것처럼 보입니다. 이럴떈 퍼센트를 활용할 수 있습니다.

[애니메이션 예제2](https://kangyongseok.github.io/webtutorial/CSS%20예제/AnimationStyle/returnAnimation.html)