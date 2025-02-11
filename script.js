const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button")
const allClear = document.getElementById("all-clear");
const invert = document.getElementById("invert");
const toPercent = document.getElementById("to-percent");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// console.log(buttons)

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

const displayText = () => {
    // display.innerText = firstNum || "0";
    
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

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        display.innerText += e.target.innerText;
    })
})

operators.forEach(element => {
    element.addEventListener("click", (e) => {
        if (!(e.target.id === "equal")) {
            firstNum = display.innerText;
            operator = e.target.innerText;
            display.innerText = "";
        } else {
            secondNum = display.innerText;
            display.innerText = operate(operator, firstNum, secondNum);
        }
    })
})
