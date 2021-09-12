function threeNumIsTheSameOr(num1, num2, num3) {
    if (num1 == num2 && num2 == num3) {
        return 30
    } else if (num1 == num2 || num2 == num3 || num1 == num3) {
        return 40
    } else {
        return 20
    }
}

console.log(threeNumIsTheSameOr(122, 102, 12));