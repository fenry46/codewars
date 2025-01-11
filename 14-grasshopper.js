function getGrade(...s) {
    // Code here
    const everage = s.reduce((acc, cur) => acc + cur) / s.length
    if (everage >= 90) {
        return 'A'
    } else if (everage >= 80) {
        return 'B'
    } else if (everage >= 70) {
        return 'C'
    } else if (everage >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(getGrade(70, 70, 50))