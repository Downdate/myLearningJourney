let playerEL = document.getElementById("player-el");
let newCard;
let sum         = 0;
let hasBlackJack= false;
let isInGame    = true;
let messageEL   = document.getElementById("message-el");
let startBTN    = document.getElementById("start-btn");
let cardsEL     = document.getElementById("cards-el");
let sumEL       = document.getElementById("sum-el");
let player = {
    name: "Daniel",
    balance: 100

}

playerEL.textContent = "Username: " + player.name + ", Balance: $" + player.balance;

function startTheGame() {
    for (let i = 0 ; i<2 ; i++){
        drawNewCard();
    }

    startBTN.textContent = "DRAW A NEW CARD";
    startBTN.onclick = drawNewCard;

}
function clearTheBoard() {
    messageEL.textContent = "Want to play a round?";
    sum = 0;
    sumEL.textContent = "sum: ";
    cardsEL.textContent = "Cards: ";
    startBTN.textContent ="START GAME";
    startBTN.onclick = startTheGame;
}




function check() {

    console.log("sum of the two cards: " + sum);
    // continue condition
    if (sum < 21){
        messageEL.textContent = "Do you want to draw a new card? 😁 "
        startBTN.textContent = "DRAW A NEW CARD"
    }
// win condition
    else if (sum === 21){
        messageEL.textContent ="Congrats! you've got Blackjack! 🥳 ";
        hasBlackJack= true;
        startBTN.textContent ="restart the Game";
        startBTN.onclick = clearTheBoard;

    }
// losing condition
    else {
        messageEL.textContent = " You're out of the game! 😔 ";
        isInGame = false;
        startBTN.textContent ="restart the Game";
        startBTN.onclick = clearTheBoard;

    }
}
function getRandomCard() {
    let tempCard = Math.floor(Math.random() * 13) + 1;
    if (tempCard === 1){
        return 11;
    }
    else if ( tempCard === 11 || tempCard === 12 || tempCard === 13 ){
        return 10;
    }
    else {
        return tempCard;
    }
}
function drawNewCard(){
    newCard = getRandomCard();
    addCard(newCard);
    addSum(newCard);
    check();
}
function addSum(newCard) {
    sum += newCard;
    sumEL.textContent = "sum: " + sum;
}
function addCard(newCard) {
    cardsEL.textContent += newCard + " , ";
}

if (hasBlackJack=== true){
    console.log("Do you want to cash out? ");
}


