const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Error') {
        display.value = '0';
    }

    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    display.value = Math.sqrt(Number(display.value));
}

function square() {
    display.value = Number(display.value) ** 2;
}

function toggleSign() {
    display.value = Number(display.value) * -1;
}
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}