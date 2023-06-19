// welcome message for the user
let username        = "Daniel"
let welcomeMessage   = "Welcome back, "
let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText = welcomeMessage + username +"!"
welcomeEl.innerText += "👋"

// counter variables and elements
let count = 0
let countEl = document.getElementById("count_el")

// increment button function
function increment() {
    count++
    console.log("the button was pressed " + "count: " + count )
    countEl.textContent = count
}

// save button function for saving and resetting the counter

let savedEl = document.getElementById("saved-el")

function save(){
    let temp = count + " - "
    savedEl.textContent += temp
    console.log(count)
    count = 0
    countEl.textContent = count
}

