class Player { // player constorctor 
    constructor(player){
        this.player = player;
        this.hand = [];
        this.ponts = 0;
    }
} 

class Card { // card constructor 
    constructor (suits,rank,point) {
        this.suits = suits;
        this.rank = rank;
        this.point = point ;

    }
}


class Deck {
    constructor (){
        this.deck = [];

    }

    createDeck(){
        let suits = ['Clubs','Diamonds','Hearts','Spades'];
        let ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

        for (let i = 0; i <  4; i++) {
            for (let j = 0; j < ranks.length ;j++) {
                this.deck.push(new Card(suits[i],ranks[i],i + 1)); // add card to deck 
            }
            
        }

    }


    

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        } 
    }
}


class WarBoard {
    constructor(){
    }



    beginWar(){
        let p1 = new Player("Oscar");
        let p2 = new Player("Bot");
        let gameDeck = new Deck();
        gameDeck.createDeck();
        gameDeck.shuffle()

        for (let i = 0; i < 26; i++) {
            p1.hand.push(gameDeck.deck.pop());
            p2.hand.push(gameDeck.deck.pop());
            
            
        }

        console.log(p1);
        console.log(p2);
    }

}


let war = new WarBoard();

war.beginWar();

// let playerOne = new Player("Oscar");
// let playerTwo = new Player("Bot");

// let deckOfCards = new Deck();
// deckOfCards.createDeck();
// deckOfCards.shuffle();

// console.log(deckOfCards.deck)
//  // get points

//  for (let i = 0; i < 26; i++) {
//     playerOne.hand.push(deckOfCards.deck.pop());
//     playerTwo.hand.push(deckOfCards.deck.pop());
    
//  }




// console.log(deckOfCards.deck.length)
//  console.log(playerOne);
//  console.log(playerTwo);

//  for (let i = 0; i < playerOne.hand.length; i++) {

//     if(playerOne.hand[i].getPoint() > playerTwo.hand[i].getPoint()){

//         playerOne.hand.push(playerTwo.hand[i])


        
//     }

    
//  }