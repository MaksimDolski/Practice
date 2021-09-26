function extractHalfOfStr(str) {

    if (str.length % 2 == 0) {
        return str.substr(0, str.length / 2)
    } else {
        return "Please insert an even string length"
    }
}

console.log(extractHalfOfStr('JavaScript'))