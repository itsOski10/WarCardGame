/**
 * Name: Oscar Ramirez
 * Date: 07/09/2022
 * 
 * 
 * Decription: An automated version of the classic card game WAR. 
 * RUles of Game:
 * -	Deal 26 Cards to two Players from a Deck. 
 * -	Iterate through the turns where each Player plays a Card
 * -	The Player who played the higher card is awarded a point
 *          o	Ties result in zero points for either Player
 * -	After all cards have been played, display the score.
 * 
 * 
 */




class Player { // player Class 
    constructor(player){
        this.player = player;
        this.hand = [];
        this.ponts = 0;
    }  

} 

class Card { // Card Class
    constructor (suits,rank,point) {
        this.suits = suits;
        this.rank = rank;
        this.point = point ;

    }

    getPoint (){ // Returns card point Value
        return this.point;
    }

    getCard(){ // Returns a card Suits And its Rank

        return this.suits +":" + this.rank;
    }
}


class Deck {
    constructor (){
        this.deck = [];

    }

    createDeck(){ // method for creating deck
        let suits = ['Clubs','Diamonds','Hearts','Spades'];
        let ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
      let point = [2,3,4,5,6,7,8,9,10,11,12,13,14];

        for (let i = 0; i <  suits.length; i++) {
            for (let j = 0; j < ranks.length ;j++) {
                this.deck.push(new Card(suits[i],ranks[j],point[j])); // Creates and Pushes cards to Deck 
            }
            
        }

    }


    

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) { // Method that Shuffels the Deck 
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

        for (let i = 0; i < 26; i++) { // adds deck to players hands
            p1.hand.push(gameDeck.deck.pop());
            p2.hand.push(gameDeck.deck.pop()); 
            
        }


        
        for (let i = 0; i < 26; i++) { // loops 26 times b/c of both Player One and Two have a hand size of 26
        if (p1.hand[i].getPoint() > p2.hand[i].getPoint()){ // comapres the card point Value
            console.log(p1.hand[i].getCard() + " > " + p2.hand[i].getCard()); 
            p1.ponts++;
        } else if(p1.hand[i].getPoint() < p2.hand[i].getPoint()) {
            console.log(p1.hand[i].getCard() + " < " + p2.hand[i].getCard());
            p2.ponts++;
        } else {
            console.log(p1.hand[i].getCard() + " === " + p2.hand[i].getCard())
        }
  
        }

/**
 * Displayes the winner
 */
        if (p1.ponts > p2.ponts) {
           alert(p1.player + " is the Winner!!!!! with " + p1.ponts + " points");
        } else if(p1.ponts < p2.ponts) {
            alert(p2.player + " is the Winner!!!!! with " + p2.ponts + " points");  
        } else{
            alert(p1.player + " and " + p2.player + " Tied!!!!! with both players reciving " + p1.ponts);
        }

    }

}

let war = new WarBoard(); // creates a board 
war.beginWar(); // starts the War
