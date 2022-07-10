var expect = chai.expect;

describe("MyFunctions", function(){
    describe("#createDeck", function(){
        it("should contain 52 elements", function(){

            let deck = new Deck();
            deck.createDeck();
            expect(deck.deck.length).to.equal(52)
        })
    })
});


describe("MyFunctions", function(){
    describe("#Shuffle", function(){
        it("Decks should be diffenet", function(){

            let deck = new Deck();
            deck.createDeck();
            let arr = deck.deck;

            console.log(arr)

            deck.shuffle();
            let arr2 = deck.deck;

            console.log(arr2)

            expect(arr).to.equal(arr2) == false;
        })
    })
});


