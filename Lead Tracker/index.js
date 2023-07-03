let myLeads = []
const inputEl = document.getElementById("input-el")
const saveButton = document.getElementById("input-btn")

saveButton.addEventListener("click", function() {
myLeads.push(inputEl.value)
console.log(myLeads)
})