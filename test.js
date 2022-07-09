let deck = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];


for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}




console.log(deck)

let face = faceDown(0,deck);
console.log(face);
console.log(deck)


function faceDown (index,arr){
    return arr.splice(index,1);
}

