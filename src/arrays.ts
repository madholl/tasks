/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const immutableNumbers = [...numbers];
    const newArr: number[] = [];
    if (immutableNumbers.length === 0) {
        return newArr;
    }
    if (immutableNumbers.length === 1) {
        const oneElement = [immutableNumbers[0], immutableNumbers[0]];
        return oneElement;
    } else {
        const first = immutableNumbers[0];
        const last = immutableNumbers[numbers.length - 1];
        const multipleElements = [first, last];
        return multipleElements;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const immutableNumbers = [...numbers];
    const tripled = immutableNumbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const immutableNumbers = [...numbers];
    const newArr = immutableNumbers.map((number: string): number =>
        isNaN(parseInt(number)) === true ? 0 : parseInt(number)
    );
    return newArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const immutableAmounts = [...amounts];
    const removeDollarSigns = immutableAmounts.map((number: string): string =>
        number[0] === "$" ? number.substring(1) : number
    );
    const convertToInts = stringsToIntegers(removeDollarSigns);
    return convertToInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const immutableMessages = [...messages];
    const upperCase = immutableMessages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    const removeQuestions = upperCase.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return removeQuestions;
};
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const immutableWords = [...words];
    const shortWords = immutableWords.filter(
        (word: string): boolean => word.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const immutableColors = [...colors];
    const notRGB = immutableColors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (
        notRGB.length === immutableColors.length ||
        immutableColors.length === 0
    ) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const immutableAddends = [...addends];
    const addition = "";
    const sum = immutableAddends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const additionExpression = immutableAddends.map((value: number): string =>
        immutableAddends.indexOf(value) + 1 === immutableAddends.length
            ? addition + value
            : addition + value + "+"
    );
    const newStr = additionExpression.reduce(
        (str, number) => `${str}${number}`,
        ""
    );
    if (sum === 0) {
        return "0=0";
    } else {
        return `${sum}=${newStr}`;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const immutableValues = [...values];
    const negatives = immutableValues.filter((val) => val < 0);
    if (negatives.length === 0) {
        const sum = immutableValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...immutableValues, sum];
    } else {
        const firstNeg = (val: number) => val < 0;
        const index = immutableValues.findIndex(firstNeg);
        const sum = immutableValues.slice(0, index).reduce((a, b) => a + b, 0);
        immutableValues.splice(index + 1, 0, sum);
        return immutableValues;
    }
}
