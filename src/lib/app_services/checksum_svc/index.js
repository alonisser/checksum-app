
const {subBinary, addBinary, leftPadZero, leftPadOne} = require("../../binaryHelpers");

/**
 * @param {Array<string>} arrayOfBinaryStrings
 * @returns {string} checksum binary string
 */
const createChecksum = (arrayOfBinaryStrings) => {
    const sortedByLengthBinaryArray = arrayOfBinaryStrings.sort((first, second) => {
        return second.length - first.length
    })

    const maxLength = sortedByLengthBinaryArray[0].length;

    const equalLengthBinaryStrings = arrayOfBinaryStrings.map((elem) => {
        return leftPadZero(elem, maxLength)
    })

    const totalBinaryOfInputArray = equalLengthBinaryStrings.reduce((accumulator, currentValue) => {
        return addBinary(accumulator, currentValue)
    }, leftPadZero('0', maxLength))

    const totalOnesBinaryString = leftPadOne('1', maxLength)

    const checksum = subBinary(totalOnesBinaryString, totalBinaryOfInputArray);
    return checksum;
}

/**
 *
 * @param {Array<Array<number>>} bytes
 */
const createBinaryArrayChecksum = (bytes) => {
    const binaryStrings = bytes.map((byte) => {
        return byte.join('')
    })
    const binaryChecksum = createChecksum(binaryStrings)
    return binaryChecksum.split('').map((elem) => {
        return parseInt(elem, 2)
    })
}

export {createChecksum, createBinaryArrayChecksum}