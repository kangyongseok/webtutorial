window.onload = function() {
    const pauseBtn = document.querySelector('.js-pause');
    const countEl = document.querySelector('.count');
    let countNum = 1500
    let seconds = 60
    let timeInterval = setInterval(() => {
        countNum--;
        seconds--;
        countEl.innerText = `${Math.floor(countNum / 60)} : ${String(seconds).length === 1 ? `0${seconds}` : seconds}`;
        if (seconds === 0) {
            seconds = 60
        }
    }, 1000);    
    pauseBtn.addEventListener('click', () => {
        if (pauseBtn.outerText === 'pause') {
            clearInterval(timeInterval)
        } else {
            timeInterval = setInterval(() => {
                countNum--;
                seconds--;
                countEl.innerText = `${Math.floor(countNum / 60)} : ${String(seconds).length === 1 ? `0${seconds}` : seconds}`;
                if (seconds === 0) {
                    seconds = 60
                }
            }, 1000);    
        }
        pauseBtn.innerText = pauseBtn.outerText === 'start' ? 'pause' : 'start'
    })
}
