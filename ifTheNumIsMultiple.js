function ifTheNumIsMultiple(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        if ((num1 % 7 == 0 || num1 % 11 == 0) || (num2 % 7 == 0 || num2 % 11 == 0)) {
            return "One of the number is multiple of 7 or 11"
        } else {
            return false
        }
    }
}

console.log(ifTheNumIsMultiple(14, 21));