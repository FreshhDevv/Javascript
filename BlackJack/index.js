let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false
let isAlive = true


if(sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if(sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
    hasBlackJack = true
} else {
    isAlive = false
    console.log("You're out of the game")
}

console.log(isAlive)
