let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el")
function add(){
    console.log("add clicked!")
    let result = num1 + num2
    sumEL.textContent = "sum: " + result
}

function subtract() {
    console.log("subtract clicked!")
    let result = num1 - num2
    sumEL.textContent = "sum: " + result
}

function divide() {
    console.log("divide clicked!")
    let result = num1/num2
    sumEL.textContent = "sum: " + result

}

function multiply() {
    console.log("multiply clicked!")
    let result = num1 * num2
    sumEL.textContent = "sum: " + result

}
function clearSum() {
    sumEL.textContent = "sum: "
    console.log("clear clicked")
}