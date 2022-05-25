function generateArray(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
        a[i] = Math.floor(Math.random() * 11 + 20)
    }
    return a;
}
console.log(generateArray(10));