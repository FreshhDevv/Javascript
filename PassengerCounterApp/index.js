let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count_el")
function addCount() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(saveEl.innerText + count)
}


