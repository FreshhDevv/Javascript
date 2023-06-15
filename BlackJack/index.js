// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")


// let player = {
//     name: "Hans",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips


// function getRandomCard() {
//     let randomCard = Math.floor(Math.random() * 13) + 1
//     if(randomCard === 1) {
//         return 11
//     } else if(randomCard > 10) {
//         return 10
//     } else {
//         return randomCard 
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard() 
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
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
//     if(isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard();
//         sum += card
//         cards.push(card)
//         renderGame()
//     }
// }

let course = {
    title: "Learn css grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.tags)