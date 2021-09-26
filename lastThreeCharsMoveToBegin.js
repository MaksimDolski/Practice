function lastThreeCharsMoveToBegin(str) {
    let lastChars
    if (str.length >= 3) {
        lastChars = str.substring(str.length - 3)
        str = lastChars + str
    } else {
        return "The string length should be 3 or more characters"
    }
    return str.substring(0, str.length - 3)
}

console.log(lastThreeCharsMoveToBegin("JavaScript"));