const defineSuit = (card) => lastChar = card.slice(-1) == "♠" ? "spades" : lastChar == "♦" ? "diamonds" : lastChar == "♥" ? "hearts" : "clubs";


// for (let i = 0; i < card.length; i++) {
//     lastChar = card[i];
// }

// if (lastChar == "♠") return "spades"
// if (lastChar == "♦") return "diamonds"
// if (lastChar == "♥") return "hearts"
// return "clubs"
console.log(defineSuit("Q♦")); // spades