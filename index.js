function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function power(a, b){
    return a ** b;
}

function sqrt(a){
    return Math.sqrt(a);
}

function operator(op, a, b){
    switch(op){
        case "*":
            return multiply(a, b);
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "^":
            return power(a, b);
        case "/":
            return divide(a, b);
        case "root":
            return sqrt(b);
    }
}

const n0 = document.querySelector(".n0");
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const n6 = document.querySelector(".n6");
const n7 = document.querySelector(".n7");
const n8 = document.querySelector(".n8");
const n9 = document.querySelector(".n9");
const clear = document.querySelector(".C");
const x = document.querySelector(".x");
const pow = document.querySelector(".pow");
const div = document.querySelector(".div");
const dot = document.querySelector(".dot");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const root = document.querySelector(".sqrt");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const display = document.querySelector(".display");
const displayCalc = document.querySelector(".display-results");
const warning = document.querySelector(".warnings");
let op = null;
let pastNumber;
let currentNumber;
let answer;


n0.addEventListener("click", () => {
    display.textContent += n0.textContent;
});

n1.addEventListener("click", () => {
    display.textContent += n1.textContent;
});

n2.addEventListener("click", () => {
    display.textContent += n2.textContent;
});

n3.addEventListener("click", () => {
    display.textContent += n3.textContent;
});

n4.addEventListener("click", () => {
    display.textContent += n4.textContent;
});

n5.addEventListener("click", () => {
    display.textContent += n5.textContent;
});

n6.addEventListener("click", () => {
    display.textContent += n6.textContent;
});

n7.addEventListener("click", () => {
    display.textContent += n7.textContent;
});

n8.addEventListener("click", () => {
    display.textContent += n8.textContent;
});

n9.addEventListener("click", () => {
    display.textContent += n9.textContent;
});

clear.addEventListener("click", () => {
    display.textContent = "";
    displayCalc.textContent = "";
    op = null;
    pastNumber = null;
    currentNumber = null;
    removeWarning();
    enableDot();
});

x.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += x.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "*";
    } else {
        pastNumber = Number(display.textContent);
        display.textContent += x.textContent;
        displayCalc.textContent = display.textContent;
        display.textContent = "";
        op = "*";
    }
    removeWarning();
    enableDot();
});

pow.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += pow.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "^";
    } else {
        pastNumber = Number(display.textContent);
        display.textContent += "^";
        displayCalc.textContent = display.textContent;
        display.textContent = "";
        op = "^"
    }
    removeWarning();
    enableDot();
});

div.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += div.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "/";
    } else {
        pastNumber = Number(display.textContent);
        display.textContent += div.textContent;
        displayCalc.textContent = display.textContent;
        display.textContent = "";
        op = "/";
    }
    removeWarning();
    enableDot();
});

dot.addEventListener("click", () => {
    if(display.textContent.indexOf(".") !== -1) {
        dot.setAttribute("disabled", true);
        warning.textContent = "You can only use one dot per number!"
    } else {
        display.textContent += dot.textContent;
    }
});

minus.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += minus.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "-";
    } else {
        pastNumber = Number(display.textContent);
        display.textContent += minus.textContent;
        displayCalc.textContent = display.textContent;
        display.textContent = "";
        op = "-";
    }
    removeWarning();
    enableDot();
});

plus.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += plus.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "+";
    } else {
        pastNumber = Number(display.textContent);
        display.textContent += plus.textContent;
        displayCalc.textContent = display.textContent;
        display.textContent = "";
        op = "+";
    }
    removeWarning();
    enableDot();
});

root.addEventListener("click", () => {
    if(op !== null){
        currentNumber = Number(display.textContent);
        display.textContent += root.textContent;
        displayCalc.textContent += display.textContent;
        display.textContent = "";
        pastNumber = operator(op, pastNumber, currentNumber);
        op = "root";
    } else {
    pastNumber = Number(display.textContent);
    display.textContent += root.textContent;
    displayCalc.textContent = display.textContent;
    display.textContent = "";
    op = "root";
    }
    removeWarning();
    enableDot();
});

del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    removeWarning();
});

equal.addEventListener("click", () => {
    if(pastNumber === undefined){
        warning.textContent = "Select an operator first";
    } else {
        currentNumber = Number(display.textContent);
        displayCalc.textContent += currentNumber;
        displayCalc.textContent += equal.textContent;
        display.textContent = operator(op, pastNumber, currentNumber);
        answer = operator(op, pastNumber, currentNumber);
        currentNumber = answer;
        pastNumber = null;
        op = null;
    }
    enableDot();
});

function enableDot() {
    document.querySelector(".dot").disabled = false;
}

function removeWarning() {
    warning.textContent = "";
}