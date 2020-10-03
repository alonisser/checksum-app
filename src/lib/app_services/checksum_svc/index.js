/* global BigInt */

const {subBinary, addBinary, leftPadZero, leftPadOne} = require("../../binaryHelpers");
/*
 * @param {Array<string>} arrayOfBinaryStrings
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

module.exports = {createChecksum}