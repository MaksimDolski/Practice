function frontAndBackCharAdding(str) {
    let frontChar = str.substring(0,1)
    let backChar = str.substring(str.length - 1)
    return frontChar + str + backChar
}

console.log(frontAndBackCharAdding("String"));