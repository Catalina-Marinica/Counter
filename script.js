const minusBtn = document.getElementById("minus-button")
const plusBtn = document.getElementById("plus-button")
var counter = document.getElementById("counter")

var count = 0

minusBtn.addEventListener("click", function (event) {
    count--
    counter.innerText = count
})

plusBtn.addEventListener("click", function (event) {
    count++
    counter.innerText = count
})