function threeLastCharFrontAndBackAdding(str) {
    if (str.length >= 3) {
        let threeLastChar = str.substring(str.length - 3)
        return threeLastChar + str + threeLastChar
    } else {
        return "The string length must be 3 or more"
    }

}

console.log(threeLastCharFrontAndBackAdding("String"));