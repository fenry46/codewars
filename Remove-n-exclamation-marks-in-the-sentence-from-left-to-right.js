function remove(s, n) {
    for (let i = 0; i < n; i++) {
        s = s.replace("!", "")
    }
    return s;
}

console.log(remove("!!!Hi !!hi!!! !hi", 1))

// Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
// Test.assertSimilar(remove("Hi!!!",100) , "Hi")