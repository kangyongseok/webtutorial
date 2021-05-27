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


## 중복 스타일 리팩토링한 전체 코드

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
    align-items: center;
    justify-content: flex-end;
}

.header_area .util_menu ul li {
    margin-left: 10px;
    font-size: 13px;
}


.header_area .logo_area {
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


.gnb_area {
    align-items: center;
    justify-content: center;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    height: 52px;
    margin-top: 50px;
    margin-bottom: 20px;
}

.gnb_area_inner {
    align-items: center;
    width: 1130px;
    height: 100%;
}

.gnb_area ul {
    align-items: center;
    font-size: 17px;
    font-weight: bold;
}

.gnb_area .fix_menu li a {
    color: green;
}

.gnb_area .favorit_menu li a {
    color: black;
}

.gnb_area ul li {
    margin-right: 10px;
}

.gnb_area .weather_info_area {
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    width: 150px;
}


.contents_area {
    align-items: flex-start;
    justify-content: space-between;
    width: 1130px;
    margin: 0 auto;
}

.contents_area .main_contents {
    /* background: aquamarine; */
    width: 750px;
}

.main_contents .news_stand {
    /* background: red; */
}

.main_contents .news_stand .news_slide_area {
    align-items: center;
    background: #eeeeee;
    padding: 12px;
    border: 1px solid #cccccc;
    margin: 20px 0;
}

.news_slide_area .quick_news {
    align-items: center;
    margin-right: auto;
}

.news_slide_area .category ul {
    align-items: center;
}

.news_stand_list .title_area {
    align-items: center;
    margin-bottom: 20px;
}

.news_stand_list .title_area p {
    margin-right: auto;
}

.news_stand_list .title_area ul {
    align-items: center;
}

.news_stand_list .news_card_list ul {
    align-items: center;
    flex-wrap: wrap;
}

.news_stand_list .news_card_list ul li {
    width: 125px;
    height: 65px;
    border: 1px solid #cccccc;
    align-items: center;
    justify-content: center;
}

.today_article {
    margin: 20px 0;
}

.today_article .title_area {
    align-items: center;
    margin-bottom: 10px;
}

.today_article .title_area div {
    align-items: center;
    margin-left: auto;
}

.today_article .category_tab  {
    margin-bottom: 20px;
}

.today_article .category_tab ul {
    align-items: center;
}

.today_article .category_tab ul li {
    width: 94px;
    height: 45px;
    border: 1px solid #cccccc;
    align-items: center;
    justify-content: center;
}

.main_articles {
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
    align-items: flex-start;
    margin-bottom: 20px;
}

.main_articles .card_area .card img {
    margin-right: 20px;
}


.contents_area .aside_area {
    background: tan;
    width: 350px;
}
```


## 스타일 작성하면서 추가된 클래스명 포함한 전체 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>네이버</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <div id="wrap">
        <header class="header_area">
            <div class="util_menu">
                <ul>
                    <li><a href="#">네이버를 시작페이지로</a></li>
                    <li><a href="#">쥬니어네이버</a></li>
                    <li><a href="#">해피빈</a></li>
                </ul>
            </div>
            <div class="logo_area">
                <h1 class="logo">네이버로고</h1>
                <input type="text" />
                <img src="https://via.placeholder.com/56x56.png?text=search" alt="검색 아이콘" />
            </div>
        </header>
        <nav class="gnb_area">
            <div class="gnb_area_inner">
                <ul class="fix_menu">
                    <li><a href="#">메일</a></li>
                    <li><a href="#">카페</a></li>
                    <li><a href="#">블로그</a></li>
                    <li><a href="#">지식인</a></li>
                    <li><a href="#">쇼핑</a></li>
                    <li><a href="#">TV</a></li>
                </ul>
                <ul class="favorit_menu">
                    <li><a href="#">사전</a></li>
                    <li><a href="#">뉴스</a></li>
                    <li><a href="#">증권</a></li>
                    <li><a href="#">부동산</a></li>
                    <li><a href="#">지도</a></li>
                    <li><a href="#">웹툰</a></li>
                </ul>
                <div class="weather_info_area">
                    <p>미세</p>
                    <p>👨‍🦲</p>
                    <p>보통</p>
                    <p>관산동</p>
                </div>
            </div>
        </nav>
        <div class="contents_area">
            <section class="main_contents">
                <section class="ad_area">
                        <img src="https://via.placeholder.com/750x135.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="메인광고배너">
                </section>
                <section class="news_stand">
                    <div class="news_slide_area">
                        <div class="quick_news">
                            <p>연합뉴스</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="category">
                            <ul>
                                <li><a href="#">네이버뉴스</a></li>
                                <li><a href="#">연예</a></li>
                                <li><a href="#">스포츠</a></li>
                                <li><a href="#">경제</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="news_stand_list">
                        <div class="title_area">
                            <p>뉴스스탠드 > 구독한 언론사 전체언론사</p>
                            <ul>
                                <li><button>icon1</button></li>
                                <li><button>icon2</button></li>
                                <li><button>icon3</button></li>
                            </ul>
                        </div>
                        <div class="news_card_list">
                            <ul>
                                <li><a href="#">시사인</a></li>
                                <li><a href="#">YTN</a></li>
                                <li><a href="#">매일경제</a></li>
                                <li><a href="#">이투데이</a></li>
                                <li><a href="#">아시아경제</a></li>
                                <li><a href="#">문화일보</a></li>
                                <li><a href="#">시사인</a></li>
                                <li><a href="#">YTN</a></li>
                                <li><a href="#">매일경제</a></li>
                                <li><a href="#">이투데이</a></li>
                                <li><a href="#">아시아경제</a></li>
                                <li><a href="#">문화일보</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="today_article">
                    <div class="title_area">
                        <p>오늘 읽을만한 글</p>
                        <p>주제별로 분류된 다양한 글 모음</p>
                        <div>
                            <p>1,839 개의 글</p>
                            <p>관심주제 설정</p>
                        </div>
                    </div>
                    <div class="category_tab">
                        <ul>
                            <li><a href="#">엔터</a></li>
                            <li><a href="#">스포츠</a></li>
                            <li><a href="#">자동차</a></li>
                            <li><a href="#">웹툰</a></li>
                            <li><a href="#">경제</a></li>
                            <li><a href="#">레시피</a></li>
                            <li><a href="#">게임</a></li>
                            <li><a href="#">게임</a></li>
                        </ul>
                    </div>
                    <div class="main_articles">
                        <div class="select_article">
                            <img src="https://via.placeholder.com/364x180.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="카드 이미지">
                            <p>자동차 소식</p>
                            <p>MY CAR에서 내 차 관리하고</p>
                            <p>중고차 1,000만원 할인권 GET!</p>
                        </div>
                        <div class="card_area">
                            <div class="card">
                                <img src="https://via.placeholder.com/98x98.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                <div>
                                    <p>자동차 트렌드</p>
                                    <p>고성능 4도어 전기차</p>
                                    <p>모터매거진</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://via.placeholder.com/98x98.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                <div>
                                    <p>자동차 트렌드</p>
                                    <p>고성능 4도어 전기차</p>
                                    <p>모터매거진</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://via.placeholder.com/98x98.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                <div>
                                    <p>자동차 트렌드</p>
                                    <p>고성능 4도어 전기차</p>
                                    <p>모터매거진</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="category_contents_list">
                        <div class="card">
                            <img src="https://via.placeholder.com/170x114.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                            <div>
                                <p>자동차</p>
                                <p>고성능 4도어 전기차</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facere laboriosam pariatur atque officia adipisci ipsa vero officiis qui inventore, minima illum ipsam autem! Vero velit quisquam maiores quasi.
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://via.placeholder.com/170x114.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                            <div>
                                <p>자동차</p>
                                <p>고성능 4도어 전기차</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis facere laboriosam pariatur atque officia adipisci ipsa vero officiis qui inventore, minima illum ipsam autem! Vero velit quisquam maiores quasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <aside class="aside_area">
                <div class="login_area">
                    <p>네이버를 더 안전하고 편리하게 이용하세요</p>
                    <button>NAVER 로그인</button>
                    <div>
                        <p>아이디</p>
                        <p>비밀번호찾기</p>
                        <p>회원가입</p>
                    </div>
                </div>
                <div class="economy"></div>
                <div class="aside_baner">
                    <img src="https://via.placeholder.com/350x200.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                </div>
                <div class="shopping_area">
                    <div class="title_group">
                        <p>트렌드쇼핑 ></p>
                        <div class="shop_tab">
                            <ul>
                                <li><a href="#">상품</a></li>
                                <li><a href="#">쇼핑몰</a></li>
                                <li><a href="#">MEN</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="shop_group">
                        <ul>
                            <li>지마켁</li>
                            <li>옥션</li>
                            <li>11번가</li>
                            <li>이마트몰</li>
                            <li>티몬</li>
                            <li>위메프</li>
                            <li>쿠팡</li>
                            <li>신세계몰</li>
                            <li>올리브영</li>
                            <li>롯데몰</li>
                        </ul>
                        <div class="item_area">
                            <ul>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://via.placeholder.com/107x146.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                                        <p>반짝반짝 빛나니</p>
                                        <p>너무나 좋아해~</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
        <footer class="footer_area">
            <div class="footer_banner">
                <div>
                    <img src="https://via.placeholder.com/160x86.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                    <div>
                        <p>D2SF 스타트업</p>
                        <p>카페창업, 얼마나 남을까?</p>
                        <p>지금 바로 확인하세요</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/160x86.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                    <div>
                        <p>D2SF 스타트업</p>
                        <p>카페창업, 얼마나 남을까?</p>
                        <p>지금 바로 확인하세요</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/160x86.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" alt="">
                    <div>
                        <p>D2SF 스타트업</p>
                        <p>카페창업, 얼마나 남을까?</p>
                        <p>지금 바로 확인하세요</p>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <div>
                    <dl>
                        <dt>Creators</dt>
                        <dd>크리에이터</dd>
                        <dd>스몰비즈니스</dd>
                    </dl>
                    <dl>
                        <dt>Partners</dt>
                        <dd>비즈니스 광고</dd>
                        <dd>스토어개설</dd>
                        <dd>지역업체 등록</dd>
                    </dl>
                    <dl>
                        <dt>Developers</dt>
                        <dd>네이버 개발자 센터</dd>
                        <dd>오픈 API</dd>
                        <dd>오픈소스</dd>
                    </dl>
                </div>
                <div>
                    <div>웨일 브라우저</div>
                    <div>프로젝트 꽃</div>
                </div>
            </div>
            <div class="footer_menu">
                <ul>
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">인재채용</a></li>
                    <li><a href="#">제휴제안</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">청소년보호정책</a></li>
                    <li><a href="#">네이버정책</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>
            </div>
        </footer>
    </div>
</body>
</html>
```