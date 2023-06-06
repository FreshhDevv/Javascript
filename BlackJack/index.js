let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

function startGame() {

    if(sum <= 20) {
        message = "Do you want to draw a new card?"
        sumEl.textContent += sum
    } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        sumEl.textContent += sum;
    } else {
        isAlive = false
        message = "You're out of the game!"
        sumEl.textContent += sum;
    }
    messageEl.textContent = message
}

