function posOrNegNum(a, b) {
    if (a > 0 && b < 0) {
        return "One num is positive and another one is negative"
    } else {
        return "One num is not positive and/or another one is not negative"
    }
}

console.log(posOrNegNum(1, 1));