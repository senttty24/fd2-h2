function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

const operation = {
    add: 'add',
    subtract: 'subtract',
    multiply: 'multiply',
    divide: 'divide'
}

function calc(a, b) {
    let result = null;

    return function operationChoice(operation) {
        if (typeof a !== "number" || typeof b !== "number") {
            return result;
        } else {
            switch (operation) {
                case 'add':
                    result = add(a, b);
                    break;
                case 'subtract':
                    result = subtract(a, b);
                    break;
                case 'multiply':
                    result = multiply(a, b);
                    break;
                case 'divide':
                    result = divide(a, b);
                    break;

                default:
                    result = null;
                    break;
            }
        }

        return result;
    }

}