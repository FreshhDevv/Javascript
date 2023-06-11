// let firstCard = 4;
// let secondCard = 10;
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
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
//     let thirdCard = 5
//     sum += thirdCard
//     cards.push(thirdCard)
//     renderGame()
// }


// for (let count = 10; count < 21; count += 1) {
//     console.log(count)
// }

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great!!!",
    "Thank you!"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}