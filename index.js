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
let op;
let pastNumber = 0;
let currentNumber = 0;


n0.addEventListener("click", () => {
    display.textContent += n0.textContent;
    pastNumber = currentNumber;
    currentNumber = 0;
});

n1.addEventListener("click", () => {
    display.textContent += n1.textContent;
    pastNumber = currentNumber;
    currentNumber = 1;
});

n2.addEventListener("click", () => {
    display.textContent += n2.textContent;
    pastNumber = currentNumber;
    currentNumber = 2;
});

n3.addEventListener("click", () => {
    display.textContent += n3.textContent;
    pastNumber = currentNumber;
    currentNumber = 3;
});

n4.addEventListener("click", () => {
    display.textContent += n4.textContent;
    pastNumber = currentNumber;
    currentNumber = 4;
});

n5.addEventListener("click", () => {
    display.textContent += n5.textContent;
    pastNumber = currentNumber;
    currentNumber = 5;
});

n6.addEventListener("click", () => {
    display.textContent += n6.textContent;
    pastNumber = currentNumber;
    currentNumber = 6;
});

n7.addEventListener("click", () => {
    display.textContent += n7.textContent;
    pastNumber = currentNumber;
    currentNumber = 7;
});

n8.addEventListener("click", () => {
    display.textContent += n8.textContent;
    pastNumber = currentNumber;
    currentNumber = 8;
});

n9.addEventListener("click", () => {
    display.textContent += n9.textContent;
    pastNumber = currentNumber;
    currentNumber = 9;
});

clear.addEventListener("click", () => {
    display.textContent = "";
});

x.addEventListener("click", () => {
    display.textContent += x.textContent;
    op = "*";
});

pow.addEventListener("click", () => {
    display.textContent += "^";
    op = "^"
});

div.addEventListener("click", () => {
    display.textContent += div.textContent;
    op = "/";
});

dot.addEventListener("click", () => {
    display.textContent += dot.textContent;
});

minus.addEventListener("click", () => {
    display.textContent += minus.textContent;
    op = "-";
});

plus.addEventListener("click", () => {
    display.textContent += plus.textContent;
    op = "+";
});

root.addEventListener("click", () => {
    display.textContent += root.textContent;
    op = "root";
});

del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});

equal.addEventListener("click", () => {
    display.textContent = operator(op, pastNumber, currentNumber);
});