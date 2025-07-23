//Clears the calculator display
function clearDisplay() {
    document.getElementById("result").value = "";
}
// Appends a character to the calculator display
function setscreen(value) {
    document.getElementById("result").value += value;
}
//calculates and displays the result
function calculateResult() {
    const resultElement=document.getElementById("result");
    const expression = resultElement.value.trim();
}
if (expression === "") {
        resultElement.value = "Enter an expression";
        return;
    }
    try {
        resultElement.value = eval(expression);
    } catch (error) {
        resultElement.value = "Error";
    }
