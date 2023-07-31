/**
 * Calculate discounted price.
 *
 * @param products Array of products
 * @param percentage Discount percentage
 * @returns {*[]} New array of products
 */
export const calculateDiscountedPrice = (products, percentage) => {
    return JSON.parse(JSON.stringify(products))
        .map(product => {
            product.price = product.price - product.price * percentage / 100;
            return product;
        });
}

/**
 * Calculate total price of products.
 *
 * @param products Array of products
 * @returns {number} Total price of all products
 */
export const calculateTotalPrice = (products) => {
    return [...products]
        .map(product => product.price)
        .reduce((a, b) => a + b, 0);
}

/**
 * Get person's full name.
 *
 * @param person Person
 * @returns {string} Full name
 */
export const getFullName = (person) => concat(person.firstName)(person.lastName);

/**
 * Concatenation.
 *
 * @param first String
 * @returns {function(string): string} Result
 */
const concat = first => second => first + " " + second;

/**
 * Filter unique words from string.
 *
 * @param text String
 * @returns {any[]} Array of unique words sorted in alphabetical order
 */
export const filterUniqueWords = (text) => toSortedArray([...new Set(toUniqueArray(text))]);

/**
 * Convert string to unique array.
 *
 * @param text String
 * @returns {*} Array sorted in alphabetical order
 */
const toUniqueArray = (text) => text.match(/\b(\w+)\b/g)
    .map(word => word.toLowerCase());

/**
 * Sort array.
 *
 * @param array Array
 * @returns {*} Array sorted in alphabetical order
 */
const toSortedArray = (array) => array.sort();


/**
 * Get average grade.
 *
 * @param students Array of students
 * @returns {number} Average grade of all students
 */
export const getAverageGrade = (students) =>
    calculateAverageGrade([...students].flatMap(student => student.grades));

/**
 * Calculate average grade.
 *
 * @param grades Array of numbers
 * @returns {number} Result
 */
const calculateAverageGrade = (grades) => sum(grades) / grades.length;

/**
 * Calculate sum.
 *
 * @param grades Array of numbers
 * @returns {number} Result
 */
const sum = (grades) => grades.reduce((a, b) => a + b, 0);

/**
 * Increment the count.
 *
 * @returns {function(number): number} Counter
 */
export const createCounter = () => {
    let counter = 0;
    return () => counter++;
}

/**
 * Invoke the original function multiple times based on the provided number.
 *
 * @param fun Function
 * @param number Number
 * @returns {(function(): void)|*} New function
 */
export const repeatFunction = (fun, number) => {
    return (args) => {
        let i = 0;
        while (i < number) {
            fun(args);
            i++;
        }
    }
}

/**
 * Calculate the factorial of a given number.
 *
 * @param number Number
 * @param result Temp result
 * @returns {number|number|*} Factorial of a given number
 */
export const calculateFactorial = (number, result = 1) => {
    if (number < 2) {
        return result;
    } else {
        return calculateFactorial(number - 1, result * number);
    }
}

/**
 * Calculate the power of the base to the exponent.
 *
 * @param base Base
 * @param exponent Exponent
 * @param result Temp result
 * @returns {number|*|number} Power of the base to the exponent
 */
export const power = (base, exponent, result = 1) => {
    if (exponent < 1) {
        return result;
    } else {
        return power(base, --exponent, result * base);
    }
}

/**
 * Apply the mapping function to each element of the array one at a time.
 *
 * @param array Array
 * @param fun Map function
 * @returns {(function(): (*|number))|*} Result
 */
export const lazyMap = (array, fun) => {
    let i = 0;
    return () => {
        if (i < array.length) {
            return fun([...array][i++]);
        }
    }
}

/**
 * Generate Fibonacci numbers one at a time.
 *
 * @returns {(function(): (number))|*} Number
 */
export const fibonacciGenerator = () => {
    let index = 0;
    let prev1 = 0;
    let prev2 = 1;
    return () => {
        if (index < 2) {
            return index++;
        }
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
        return current;
    }
}