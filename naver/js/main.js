const fixMenu = [
    { label: '메일', url: 'www.mail.com' },
    { label: '카페', url: 'www.cage.com' },
    { label: '블로그', url: 'www.blog.com' },
    { label: '지식인', url: 'www.in.com' },
    { label: '쇼핑', url: 'www.shopping.com' },
    { label: 'TV', url: 'www.tv.com' },
]
const favoritMenu = [
    { label: '사전', url: 'www.mail.com' },
    { label: '뉴스', url: 'www.cage.com' },
    { label: '증권', url: 'www.blog.com' },
    { label: '부동산', url: 'www.in.com' },
    { label: '지도', url: 'www.shopping.com' },
    { label: '웹툰', url: 'www.tv.com' },
]


window.onload = function () {
    const fixUl = document.querySelector('.fix_menu');
    const favorittUl = document.querySelector('.favorit_menu');
    const fixLists = fixMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')
    const favoritLists = favoritMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('')
    fixUl.innerHTML = fixLists
    favorittUl.innerHTML = favoritLists
}