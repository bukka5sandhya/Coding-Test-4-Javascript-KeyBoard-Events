let userInputEle = document.getElementById("userInput");
let keydownCounterEle = document.getElementById("keydownCounter");
let keydownCodeEle = document.getElementById("keydownCode");

let count = 0
userInputEle.addEventListener("keydown",function(event){
    count += 1;
    keydownCounterEle.textContent = count;
    keydownCodeEle.textContent = event.keyCode;

});