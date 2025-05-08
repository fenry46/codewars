function stringClean(s) {
    // // Function will return the cleaned string
    // result = "";

    // for (let i = 0; i < s.length; i++) {
    //     if (typeof s[i] === 'string') {
    //         result += s[i];
    //     }
    // }

    // return s.replace(/[0-9]/g, '')
    return s.split('').filter((n) => n != parseInt(n)).join('')

}

console.log(stringClean("testing2"));