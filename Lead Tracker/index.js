let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const saveButton = document.getElementById("input-btn")

saveButton.addEventListener("click", function() {
myLeads.push(inputEl.value)
console.log(myLeads)
})

for(i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}