const x = 1;
function outerFunc () {
    const x = 10;
    innterFunc()
}
function innterFunc () {
    console.log(x); // 1
    console.log(this)
}

outerFunc()