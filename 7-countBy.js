function count(a, b) {
    let z = [];
    for (let i = 1; i <= b; i++) {
        z.push(i * a)
    }
    return z;
}
console.log(count(1, 10));