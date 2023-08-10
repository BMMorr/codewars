
function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u',]
    let total = 0
    for (let xyz of str) {
        if (vowels.includes(xyz)) {
            console.log(xyz);
            total += 1
        }
    }
    return total;
}
console.log(getCount('twzyeeee'))