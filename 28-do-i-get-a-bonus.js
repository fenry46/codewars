function bonusTime(salary, bonus) {
    // your code here
    result = '';
    if (bonus) {
        result += '£' + salary * 10
    } else {
        result += '£' + salary
    }

    return result
}

console.log(bonusTime(10000, false))