function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value);  // Evaluate the mathematical expression
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
