function largerNumFromTwoInRange(num1, num2) {
    if ((num1 && num2 >= 0) && (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        if (num1 > num2) {
            return "num1 greater than num2"
        } else if (num1 == num2) {
            return "num1 and num2 have the same value"
        } else {
            return "num2 greater than num1"
        }
    } else {
        return false
    }
}

console.log(largerNumFromTwoInRange(40, 40));