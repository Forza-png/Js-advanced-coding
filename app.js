function clearscreen() {
    document.getElementById("result").value = "";
}

//Apppens the value of the button to the result
function setscreenValue(value) {
    const r = document.getElementById("result");
    if (r.value === "Enter a valid expression" ||r.value === "Invalid expression") r.value = "";
    r.value += value;
}

//Calculates the result of the expression
function calculateResult() {
    const result = document.getElementById("result");
    const expression =resultElemnt.value.trim();
    if (expression === "") {
        result.value = "Enter a valid expression";
        return;
    }
    try {
        resultElement.value = eval(expression);
    } catch (error) {
        resultElement.value = "Invalid expression";
    }
    }