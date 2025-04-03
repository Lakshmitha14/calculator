function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "" && (value === "+" || value === "-" || value === "*" || value === "/")) {
        return; // Prevent starting with an operator
    }
    let lastChar = display.value.slice(-1);
    if (["+", "-", "", "/"].includes(lastChar) && ["+", "-", "", "/"].includes(value)) {
        return; // Prevent consecutive operators
    }
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById("display");
    if (display.value === "") return; // Prevent empty calculation

    try {
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = "Error"; // Handles invalid expressions
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}