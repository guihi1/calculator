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

function operator(op, a, b){
    switch(op){
        case "*":
            multiply(a, b);
            break;
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "^":
            power(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}