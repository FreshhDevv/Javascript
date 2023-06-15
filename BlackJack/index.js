// /** @format */

// let player = {
// 	name: "Hans",
// 	chips: 200,
// };

// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");

// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;

// function getRandomCard() {
// 	let randomCard = Math.floor(Math.random() * 13) + 1;
// 	if (randomCard === 1) {
// 		return 11;
// 	} else if (randomCard > 10) {
// 		return 10;
// 	} else {
// 		return randomCard;
// 	}
// }

// function startGame() {
// 	isAlive = true;
// 	let firstCard = getRandomCard();
// 	let secondCard = getRandomCard();
// 	cards = [firstCard, secondCard];
// 	sum = firstCard + secondCard;
// 	renderGame();
// }

// function renderGame() {
// 	cardsEl.textContent = "Cards: ";
// 	for (let i = 0; i < cards.length; i++) {
// 		cardsEl.textContent += cards[i] + " ";
// 	}
// 	if (sum <= 20) {
// 		message = "Do you want to draw a new card?";
// 		sumEl.textContent = "Sum: " + sum;
// 	} else if (sum === 21) {
// 		message = "You've got Blackjack!";
// 		hasBlackJack = true;
// 		sumEl.textContent = "Sum: " + sum;
// 	} else {
// 		isAlive = false;
// 		message = "You're out of the game!";
// 		sumEl.textContent = "Sum: " + sum;
// 	}
// 	messageEl.textContent = message;
// }

// function newCard() {
// 	if (isAlive === true && hasBlackJack === false) {
// 		let card = getRandomCard();
// 		sum += card;
// 		cards.push(card);
// 		renderGame();
// 	}
// }

// let person = {
//     name: "Hans",
//     age: 23,
//     country: "Cameroon"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

let age = 67

if(age < 6){
    console.log("free")
} else if(age < 18){
    console.log("Child discount")
} else if(age < 27){
    console.log("student discount")
} else if(age < 67){
    console.log("Full price")
} else {
    console.log("senior citizen")
}
