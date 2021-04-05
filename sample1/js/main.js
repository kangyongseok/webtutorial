window.onload = (() => {
    const menus = ['BEST100', 'NEW10', 'PANTS', '+PLUS SIZE', 'TOP', 'BEST100'];
    const links = ['www.daum.co.kr', 'www.google.com', '']

    const array = [
        {
            menu: 'best100',
            link: 'www.naver.com'
        },
        {
            menu: '123',
            link: 'www.naver.com'
        },
        {
            menu: 'dd',
            link: 'www.naver.com'
        },
        {
            menu: '3',
            link: 'www.naver.com'
        },
        {
            menu: 'g',
            link: 'www.naver.com'
        }
    ]



    // for (let i = 0; i <= menus.length; i++) {
    //     const li = document.createElement("LI");
    //     const a = document.createElement("A");
    //     const ul = document.querySelector('.nav ul');

    //     ul.appendChild(li)
    //     li.appendChild(a)
    //     a.innerText = menus[i]
    //     console.log(li, a, ul)
    // }

    /* 

        1. li 태그생성
        2. a 태그생성
        3. .nav ul 선택하기
        4. ul 에 li 자식엘리먼트로 넣어주기
        5. li 에 a 자식엘리먼트로 넣어주기
        6. a 에 메뉴 텍스트 넣어주기
    */
    // console.log(menus.map((menu) => menu + 1))
    array.map((menu, i) => {
        const li = document.createElement("LI");
        const a = document.createElement("A");
        const ul = document.querySelector('.nav ul');
        ul.appendChild(li)
        li.appendChild(a)
        a.setAttribute('href', menu.link)
        li.classList.add('list')
        a.innerText = menu.menu
    })
})