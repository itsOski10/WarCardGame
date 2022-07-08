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

    getPoint (){
        return this.point;
    }

    getCard(){
        return this.suits +":" + this.rank;
    }
}


class Deck {
    constructor (){
        this.deck = [];

    }

    createDeck(){
        let suits = ['Clubs','Diamonds','Hearts','Spades'];
        let ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
      let point = [2,3,4,5,6,7,8,9,10,11,12,13,14];

        for (let i = 0; i <  suits.length; i++) {
            for (let j = 0; j < ranks.length ;j++) {
                this.deck.push(new Card(suits[i],ranks[j],point[j])); // add card to deck 
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

        for (let i = 0; i < 26; i++) { // adds to player hands
            p1.hand.push(gameDeck.deck.pop());
            p2.hand.push(gameDeck.deck.pop());
            
            
        }





        if (p1.hand[0].getPoint() > p2.hand[0].getPoint()){
            console.log(p1.hand[0].getCard() + " > " + p2.hand[0].getCard());


        } else if(p1.hand[0].getPoint() < p2.hand[0].getPoint()) {
            console.log(p1.hand[0].getCard() + " < " + p2.hand[0].getCard());
        } else {
            console.log(p1.hand[0].getCard() + " === " + p2.hand[0].getCard())
        }
    }

}

let deck = new Deck();
console.log(deck.deck)
let war = new WarBoard();

war.beginWar();
