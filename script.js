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
        return "Can't divide 0";
    }
    return a / b;
}

let firstNum;
let operator;
let secondNum;

const operate = (operator, numbers) => {
    if (operator === "+") {
        return add();
    } else if (operator === "-") {
        return subtract()
    } else if (operator === "*") {
        return multiply();
    } else if (operator === "/") {
        return divide();
    }
}