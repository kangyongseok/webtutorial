const rates = [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]
const rates2 = [1500, 1400, 1300, 1200];
const rates3 = [900, 1000, 1200, 1300, 800, 1100, 500];

function solve (k, rates) {
    let won = k;
    let daller = 0;
    for (let i = 0; i < rates.length; i++) {
        if (!daller && won >= rates[i]) {
            if (rates[i] < rates[i + 1]) {
                won -= rates[i]
                daller = rates[i]
            }
        } else {
            if (daller && daller < rates[i]) { // 팔때
                daller = rates[i]
                if (!rates[i + 1]) {
                    won += daller
                }
                if (rates[i] > rates[i + 1]) {
                    won += rates[i]
                    daller = 0;
                }
            }
        }
    }
    console.log(won, daller)
}

solve(1000, rates) // 2150
solve(1500, rates2) // 1500
solve(1000, rates3) // 1500