// let firstCard = getRandomCard()
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     if(sum <= 20) {
//         message = "Do you want to draw a new card?"
//         sumEl.textContent = "Sum: " + sum
//     } else if(sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//         sumEl.textContent = "Sum: " + sum;
//     } else {
//         isAlive = false
//         message = "You're out of the game!"
//         sumEl.textContent = "Sum: " + sum;
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing out new card from the deck")
//     let thirdCard = getRandomCard();
//     sum += thirdCard
//     cards.push(thirdCard)
//     renderGame()
// }



let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if(player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

function totalRaceTime() {
    return player1Time + player2Time
}

let totalTime = totalRaceTime()
console.log(totalTime)