
export function sum(a, b) {
    return a + b;
}

export function difference(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function division(a, b) {
    if (b === 0)
        throw new Error("DivideByZeroException: Cannot divide by zero!");
    return a / b;
}
