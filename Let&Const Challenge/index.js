// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order fom stuff. Here are the details:

let basePrice = 520
let discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// whops! Turns out the shipping witll be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: "+ fullPrice + ". It will arrive in " + shippingTime )