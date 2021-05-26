## main contents - section
이제 메인 컨테츠 스타일 작성을 진행할텐데 일단 그전에 메인컨테츠영역또한 두개로 나눌수 있다. 바로 `section` 과 `aside` 태그로 나누었는데 이 두 큰 영역은 `.contents_area` 라는 클래스이름을 가진 박스영역에 묶여있다. 
  
어떤 영역을 정렬하거나 기준을삼고싶으면 그 영역 전체를 하나의 박스로 묶어서 작성해주면된다. 
  
각 영역의 넓이는 `section : 750px, aside: 350px` 로 나뉘어져있기에 고정 사이즈를 갖고 영역을 잡으려고한다. 

```css
.contents_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 1130px;
    margin: 0 auto;
}

.contents_area .main_contents {
    background: aquamarine;
    width: 750px;
}

.contents_area .aside_area {
    background: tan;
    width: 350px;
}
```

우선 컨테츠영역 전체가 1130px 사이즈를 기준으로 가운데에 위치해있기때문에 가장 큰 영역을 먼저 잡아주고 각 영역별 색상을 주어서 어떻게 레이아웃이 잡혀있는지 볼수있도록 하였다.

```css
align-items: flex-start;
```
해당스타일 속성은 지금껏 `center` 로만 사용했는데 여기서는 좌우 가운데 정렬이 아니라 둘중에 다른 컨테츠영역이 높이가 더 길어지더라도 항상 상단에 컨테츠가 있어야하기때문에 `flex-start` 라는 속성을 주었다.
  
```css
justify-content: space-between;
```
은 자동으로 컨텐츠를 양 끝을 기준으로 동일간 간격을 갖도록 정렬시켜주기때문에 별도로 두 컨텐츠간에 간격을 주기위한 코드는 작성하지 않아도 된다.

### 뉴스스탠드 영역
```css

.main_contents .news_stand {
    background: red;
}

.main_contents .news_stand .news_slide_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #eeeeee;
    padding: 12px;
    border: 1px solid #cccccc;
    margin: 20px 0;
}

.news_slide_area .quick_news {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-right: auto;
}

.news_slide_area .category ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}

.news_stand_list .title_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.news_stand_list .title_area p {
    margin-right: auto;
}

.news_stand_list .title_area ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}

.news_stand_list .news_card_list ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.news_stand_list .news_card_list ul li {
    width: 125px;
    height: 65px;
    border: 1px solid #cccccc;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

뉴스스탠드영역 스타일코드인데 양이 많아보일수 있는데 자세히보면 대부분이 정렬코드인걸 볼 수 있다. 기본적으로 html 엘리먼트가 블록요소로 작성되어있다면 뒤에서 아래로 나열되어있기때문에 좌우로 정렬을 하기위해서는 flex 속성이 매우 많이 여러곳에 사용된다.
  
여기서 추가로 주목해야할 부분은 
```css
flex-wrap: wrap;
```

이 부분이다. flex 를 사용해서 좌우로 정렬하게되면 자동으로 컨테츠가 추가될때 넓이값이 갯수에 비례하여 줄어들어 한줄에 컨테츠가 나열되는데 각 컨텐츠에 넓이값을 지정해주고 위의 속성값을 넣어주면 부모 넓이의 영역을 벗어나는 컨텐츠에 대해서는 자동으로 줄바꿈되어 나열된다.
  
그렇게 사용해서 만들어진 영역이 뉴스네이밍이 적힌 카드의 정렬 방식이다.

### 오늘 읽을만한 글

```css

.today_article {
    margin: 20px 0;
}

.today_article .title_area {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.today_article .title_area div {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-left: auto;
}

.today_article .category_tab  {
    margin-bottom: 20px;
}

.today_article .category_tab ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}

.today_article .category_tab ul li {
    width: 94px;
    height: 45px;
    border: 1px solid #cccccc;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main_articles {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.main_articles .select_article {
    width: 364px;
}

.main_articles .card_area {
    width: 364px;
}

.main_articles .card_area .card {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
}

.main_articles .card_area .card img {
    margin-right: 20px;
}

```

전체 레이아웃은 위에서 잡던방식와 다르지않기에 부가적인 설명은 하지않도록 하겠다. 이제부턴 혼자 직접 작성해보고 직접 작성한것과 샘프롤 제공한 코드가 어떤 차이가 있는지 확인하면서 코드가 다르더라도 제대로 화면구성이 되었다면 제대로 레이아웃을 이해하고 작성했다고 볼 수 있다.
  
이어서 나머지 영역도 스타일을 작성하기전에 리팩토링을 한번 거치려고한다.
  
지금 전체적으로 계속 반복적으로 사용되는 속성이 있는데 바로 flex 이다 이것때문에 라인수가 계속 증가하고 약간 가독성도 떨어지는것같다. 그래서 상단에 선택자를 나열해서 한번에 동일한 속성을 적용하는 방법을 사용하려고한다.

```css

/* 동일한 속성 사용 선택자 나열 */
.util_menu ul,
.logo_area,
.gnb_area,
.gnb_area_inner,
.gnb_area ul,
.weather_info_area,
.contents_area,
.news_slide_area,
.quick_news,
.category ul,
.title_area,
.title_area ul,
.news_card_list ul,
.news_card_list ul li,
.today_article .title_area div,
.category_tab ul,
.category_tab ul li,
.main_articles,
.card_area .card {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
```

이렇게 중복되는 코드를 빼왔는데 `align-items` 나 `justify-content` 를 같이 빼지 않은 이유는 세부레이아웃은 조금씩 다르기때문에 공통으로 쓰이는 것들만 따로 뺴내었고 선택자도 필요한 부분만 갖고왔고 만약 중복되는 클래스네임이 있다면 부모를 명시하도록 하였다.
  
> 이부분은 scss 같은 문법과 컴파일 도구를 활용하면 변수나 함수로 만들어 사용할 수 있다.