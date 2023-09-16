//   https://github.com/Wild-Blessings
// twitter @wild_blessings
 
//var firstCard = getRandomCard();
// var secondcard =getRandomCard();
// var cards = [firstCard,secondcard] // array ordered list of items
//var sum = firstCard + secondcard ;
var cards = [];
var sum = 0 ;
var hasBlackJack = false;
var isAlive = false;
var message = "" ;
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");
var newCardEl = document.getElementById("newCard-el");
 console.log(cards);
var playerEl = document.getElementById("player-el");
 // object player name
 var playerObject =  {
     name:"UnBlessing Yegotti",
     chips:145
    }
 playerEl.textContent = playerObject.name + ":" +" " + "Chips"+ "$"+playerObject.chips

// create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    // if 1 -> returns 11
    // if 11-13 returns ---> 10
    let randomNumber = Math.floor(Math.random() *13) +1 ;
    if(randomNumber > 10){
        return 11;
    }else if(randomNumber  === 11){
        return 10;
    }
    else{
        return randomNumber;
    }
}


// create a new function called startGame() that calls renderGame()
function startGame(){
    isAlive = true
    // generate two random numbers
    // re-asign the cards and the sum variables so that the game can start
    renderGame()
}

function renderGame(){
    // render out fist and second card 
    cardsEl.textContent ="Cards:"
for(i = 0; i < cards.length; i++){
    cardsEl.textContent += " " + cards[i]
}
// create a for loop that renders out all the cards instead of just two ]




    // render out all the card we have
     
console.log(sum) 
if (sum <= 20){
    message = "do you want to draw another card"

}

else if(sum === 21){
    message="you've got a black jack";
    hasBlackJack = true;
}
else{
    message = "your out of the game";
    isAlive = false;
} 

console.log(message)
sumEl.textContent ="Sum:" + sum;
messageEl.textContent = message;
}

function newCard() {
    // only allow the play to get a new card if he/she isAlive and does not not hve blackjack
    if(isAlive === true && hasBlackJack === false){
        console.log("newCard");
        console.log(sum)
        var card = getRandomCard()
        console.log(card)
       sum += card
       //push the card to the cards array
       cards.push(card)
       console.log(cards)
        renderGame();
    }
    
}
/* let age = 12;
if (age ===21){ 
    console.log("your welcome");
}
else if (age > 21){
    console.log("welcome king");
}
else{
    console.log("come back when your 21");
} */

