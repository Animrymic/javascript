 export default class Math {
    static PI = 3.14;

    static sum(a, b) {
        return a + b;
    }

    static difference(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static division(a, b) {
        if (b === 0)
            throw new Error("DivideByZeroException: Cannot divide by zero!");
        return a / b;
    }
}