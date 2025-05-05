// function cookie(x) {
//     if (typeof x == 'string') return "Who ate the last cookie? It was Zach!"
//     if (typeof x == 'number') return "Who ate the last cookie? It was Monica!"
//     return "Who ate the last cookie? It was the dog!"
// }


const cookie = (x) => typeof x == 'string' ? 'Who ate the last cookie? It was Zach!' : typeof x == 'number' ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";

console.log(cookie())