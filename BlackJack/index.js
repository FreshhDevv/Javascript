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
//     renderGame()
// }


//Arrays - ordered lists of items

let cards = [7, 4]

cards.push(8)
console.log(cards)

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)