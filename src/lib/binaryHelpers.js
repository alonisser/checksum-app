/* global BigInt */

/**
 * @param {string} aString
 * @param {number} len
 * @returns {string} padded 1 string
 */
const leftPadZero = (aString, len) => {
    return _leftPad(aString, len, '0')

}

/**
 * @param {string} aString
 * @param {number} len
 * @returns {string} padded 1 string
 */
const leftPadOne = (aString, len) => {
    return _leftPad(aString, len, '1')
}

const _leftPad = (aString, len, char) => {

    while (aString.length < len) {
        aString = char + aString;
    }
    return aString;
}

/**
 * @param {string} firstBinaryStr
 * @param {string} secondBinaryStr
 * @returns {string}
 */
const addBinary = (firstBinaryStr, secondBinaryStr) => {
    const maxLength = Math.max(firstBinaryStr.length, secondBinaryStr.length);
    const res =  (BigInt(`0b${firstBinaryStr}`) + BigInt(`0b${secondBinaryStr}`)).toString(2)
    return leftPadZero(res, maxLength)
}

/**
 * @param {string} firstBinaryStr
 * @param {string} secondBinaryStr
 * @returns {string}
 */
const subBinary = (firstBinaryStr, secondBinaryStr) => {
    const maxLength = Math.max(firstBinaryStr.length, secondBinaryStr.length);

    const res =  (BigInt(`0b${firstBinaryStr}`) - BigInt(`0b${secondBinaryStr}`)).toString(2)
    return leftPadZero(res, maxLength)

}

/**
 * @param {Array<number>} binaryArr
 * @returns {number}
 */
const binaryArrToValue = (binaryArr)=>{
    const result = [...binaryArr].reverse().reduce((accumulator, val, idx)=>{
        return accumulator + (val * Math.pow(2, idx))
    }, 0)
    return result
}

export {addBinary, subBinary, leftPadZero, leftPadOne, binaryArrToValue}