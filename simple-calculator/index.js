const choiceInput = document.getElementById("choice")
const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const resultButton = document.getElementById("result-btn")
const resultField = document.getElementById("result")

let result, choice, isValid

resultButton.innerText = "See Result"

resultButton.addEventListener("click", function () {
    choice = choiceInput.value
    num1 = num1Input.value
    num2 = num2Input.value
    isValid = 1
    switch(choice) {
    case '1':
        result = num1 + num2;
        break;
    case '2':
        result = num1 - num2;
        break;
    case '3':
        result = num1 * num2;
        break;
    case '4':
        result = num1 / num2;
        break;
    default:
        result = "Enter a valid choice"
        isValid = 0
    }
    if(!isValid) resultField.innerText = result
    else resultField.innerText = "The result is: " + result
})
