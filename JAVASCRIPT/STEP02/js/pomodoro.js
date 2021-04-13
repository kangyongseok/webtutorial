window.onload = function() {
    const countEl = document.querySelector('.count');
    let countNum = 1500
    let seconds = 60
    setInterval(() => {
        countNum--;
        seconds--;
        countEl.innerText = `${Math.floor(countNum / 60)} : ${String(seconds).length === 1 ? `0${seconds}` : seconds}`;
        if (seconds === 0) {
            seconds = 60
        }
    }, 1000);    
}