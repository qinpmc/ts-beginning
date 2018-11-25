
function reverse(x:number):number;
function reverse(x:string):string;

function reverse(x:any):any{
    if(typeof x =="number"){
        return Number(x.toString().split("").reverse().join(""));
    }else if(typeof x==="string"){
        return x.split("").reverse().join("");
    }
}
console.log(reverse(12345));
console.log(reverse("ASDF"));
/***********************************************/



let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x:any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);