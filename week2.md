## 2주차 CSS
css 는 html 로 작성된 문서에 디자인을 입힐때 사용합니다. html 과 마찬가지로 위에서 아래로 읽어내려가는 특징이 있고 우선순위 선택자 사용에 따라서 우선 적용되는 스타일이 달라지는 특성이 있습니다. 

## css 를 사용하는 3가지 방법
css 를 html 에서 사용할 수 있는 세가지 방법이 있습니다. 이중 두가지 방법은 별로 추천하지않는 방법이고 한가지만 실제로 현업에서 사용하는 방법입니다.

### `<head></head>` 내부에 선언
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

위와같이 `<style></style>` 태그를 `<head></head>` 내부에 선언후 그 안에서 사용하는 방법입니다.
  
간단하게 작성할땐 편하지만 코드가 길어질수록 스타일과 마크업을 구분하면서 보기가 매우 힘들기 때문에 추천하지 않습니다.

### 인라인 스타일
```html
<div style="width: 100px; height: 100px; background: red;"></div>
```

위와같이 태그내에서 style 속성을 사용하여 정의하는게 인라인 스타일 방식입니다. 이역시 스타일을 수정하고 유지보수하는데에 매우 어려워질 수 있어서 잘 사용하진 않지만 필요에 의해서 간헐적으로 사용됩니다.

### 외부스타일 선언
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="wrap"></div>
</body>
</html>

<!-- style.css -->
.wrap {
    width: 100px;
    height: 100px;
}
```

외부에서 파일을 생성하고 불러와서 사용하는 방식인데 link 라는 태그를 사용하여 css 파일을 불러올 수 있습니다. rel 이라는것은 해당 링크태그는 stylesheet 를 불러와 사용하겠다고 정해주는것이고 `href` 에 css 파일의 경로를 지정해주면 됩니다.
  
이번 클래스는 이 세번째 방법인 외부스타일 방식으로 진행됩니다.

## css 사용법
원하는 태그에 원하는 스타일을 넣으려면 원하는 태그를 선택자로 지정해서 사용해야하고 그 선택자 내부에서 스타일 코드를 작성하게됩니다. 
  
**태그선택자**
```css
div {}
p {}
span {}
```
태그선택자는 html 에서 작성한 태그를 선택자로 하여 스타일을 작성하는것인데 특징으로는 html에 있는 모든 선택자 태그에 스타일이 적용됩니다. 이역시 유지보수시 여러가지 어려움을 만들어내는 요인이므로 사용을 추천하지 않습니다.

**class 선택자**
html 에서는 각각의 태그에 class 속성을 사용하여 이름을 지어줄 수 있습니다. 이 지어준 이름을 사용해서 내가 원하는 태그에만 스타일을 지정 할 수 있습니다.

```css
.wrap {}
.main {}
.box {}
.group {}
```
class 이름은 코드를 작성하는 사용자가 지정해서 사용할 수 있습니다.

이번 클래스에서는 class 를 지정해서 사용하는 방법을 사용합니다.


