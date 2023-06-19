const container = document.getElementById("container")

container.innerHTML = '<button id="buy-btn" >BUY!</button> '
 const buyBtn = document.getElementById("buy-btn")

buyBtn.addEventListener("click" , function (){
    container.innerHTML += "<p> Thanks for your purchase! </p>"
})
