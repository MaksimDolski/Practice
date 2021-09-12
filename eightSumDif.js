function eightSumDif(num1, num2) {
    let resSum = num1 + num2
    let resDiff = num1 - num2

    if ((num1 == 8 || num2 == 8) || (resSum == 8) || (resDiff == 8)) {
        return true
    } else {
        return false
    }
}

console.log(eightSumDif(110, 102));
