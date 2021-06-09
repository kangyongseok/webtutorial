const fixMenu = ['메일', '카페', '블로그', '지식인', '쇼핑', 'TV']
const favoritMenu = ['사전', '뉴스', '증권', '부동산', '지도', '웹툰']

window.onload = function () {
    const fixUl = document.querySelector('.fix_menu');
    const favorittUl = document.querySelector('.favorit_menu');
    const fixLists = fixMenu.map(text =>`<li><a href="#">${text}</a></li>`).join('')
    const favoritLists = favoritMenu.map(text => `<li><a href="#">${text}</a></li>`).join('')
    fixUl.innerHTML = fixLists
    favorittUl.innerHTML = favoritLists
}