function twoNumsChecking(num1, num2) {
    let numSum = num1 + num2
    if ((num1 == 15 || num2 == 15) || (numSum == 15) || (Math.abs(num1 - num2) == 15)) {
        return true
    } else {
        return false
    }
}

console.log(twoNumsChecking(45, 30));
