function threeCharInLowCase(str) {
    // lower case
    let strFirstThreeChar = str.substring(0, 3).toLowerCase()
    let strFullValue = strFirstThreeChar + str.substring(3)

    if (str.length < 3) {
        return str.toUpperCase()

    } else {
        return strFullValue
    }
}

console.log(threeCharInLowCase("STRING"));
console.log(threeCharInLowCase("St"));

