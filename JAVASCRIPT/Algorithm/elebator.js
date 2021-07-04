const costs = [0, 900, 0, 200, 150, 0, 30, 50]
const costs2 = [245, 317, 151, 192]

function elevator (money, costs) {
    let rest = money
    let floor = 0;
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
        if (rest < costs[i]) {
            if (floor < count) {
                floor = count;
            }
            count = 0;
        }
        if (rest > costs[i]) {
            rest -= costs[i]
            count++
        }
    }
    console.log(floor)
}

elevator(420, costs) // 5
elevator(100, costs2) // 0