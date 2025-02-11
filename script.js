const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button")
const allClear = document.getElementById("all-clear");
const invert = document.getElementById("invert");
const toPercent = document.getElementById("to-percent");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        return "You can't divide 0";
    }
    return a / b;
}

let operator;
let firstNum;
let secondNum;
let isInverted = false;

const operate = (operator, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

buttons.forEach(button => {
    button.addEventListener("mousedown", (e) => {
        e.target.style.opacity = "0.5";
    })
    button.addEventListener("mouseup", (e) => {
        e.target.style.opacity = "1";
    })
})

allClear.addEventListener("click", () => {
    operator = undefined;
    firstNum = undefined;
    secondNum = undefined;
    display.innerText = "";
})

invert.addEventListener("click", () => {
    if (isInverted === false) {
        display.innerText = "-" + display.innerText;
        isInverted = true;
    } else {
        display.innerText = display.innerText.slice(1);
        isInverted = false;
    }
})

toPercent.addEventListener("click", () => {
    display.innerText = Number(display.innerText) / 100;
})

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.id === "decimal-point" && /\./.test(display.innerText)) {
            return;
        }
        display.innerText += e.target.innerText;
    })
})

operators.forEach(element => {
    element.addEventListener("click", (e) => {
        if (!(e.target.id === "equal")) {
            if (!(display.innerText)){
                return;
            }
            firstNum = display.innerText;
            operator = e.target.innerText;
            display.innerText = "";
        } else {
            secondNum = display.innerText;
            display.innerText = operate(operator, firstNum, secondNum);
        }
    })
})
