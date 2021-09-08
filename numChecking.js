function numChecking(num) {
    if (num >= 20 && num <= 100) {
        return "Given integer is within 20 of 100"
    } else {
        return "Given integer is not within 20 of 100"
    }
}

console.log(numChecking(101));