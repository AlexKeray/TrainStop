let peopleCount = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    peopleCount += 1
    countEl.innerText = peopleCount
}

function save() {
    saveEl.textContent += peopleCount + " - "
    peopleCount = 0
    countEl.textContent = peopleCount
}
