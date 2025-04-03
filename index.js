function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "" && (value === "+" || value === "-" || value === "*" || value === "/")) {
        return; 
    }
    let lastChar = display.value.slice(-1);
    if (["+", "-", "", "/"].includes(lastChar) && ["+", "-", "", "/"].includes(value)) {
        return; 
    }
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById("display");
    if (display.value === "") return; 

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; 
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
