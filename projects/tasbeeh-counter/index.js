let count = 0
let counts = new Array()
let history = ""

function subhanallah() {
    count++
    document.getElementById("counter-el").innerText = count
}

function resetCounter() {
    count = 0
    document.getElementById("counter-el").innerText = count
}

function saveHistory() {
   counts[count] = count
   history = history + counts[count] + " - "
   count = 0
    document.getElementById("count-history").innerText = history
    document.getElementById("counter-el").innerText = count
}

