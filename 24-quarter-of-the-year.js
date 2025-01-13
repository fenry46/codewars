const quarterOf = (month) => month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
// const quarterOf = m => Math.ceil(m/3);

console.log(quarterOf(3))