/**
 * Adds two numbers together.
 *
 * @param {number} num - The first number.
 * @param {number} num1 - The second number.
 * @returns {number} The sum of num and num1.
 */
function sum(num, num1) {
    return num + num1;
}

/**
 * Subtracts the second number from the first number.
 *
 * @param {number} num - The number to subtract from.
 * @param {number} num1 - The number to subtract.
 * @returns {number} The result of the subtraction.
 */
function substract(num, num1) {
    return num - num1;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} num - The first number.
 * @param {number} num1 - The second number.
 * @returns {number} The product of num and num1.
 */
function multiply(num, num1) {
    return num * num1;
}

/**
 * Divides one number by another.
 *
 * @param {number} num - The dividend. Must be a non-zero number.
 * @param {number} num1 - The divisor. Must be a non-zero number.
 * @returns {number} The result of dividing num by num1.
 * @throws {Error} Thrown when either argument is zero.
 */
function divide(num, num1) {
    if (num === 0 || num1 === 0) {
        throw Error('Zero is not a valid number');
    }
    return num / num1;
}