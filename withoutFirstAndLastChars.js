// option first, using strings methods
function withoutFirstAndLastChars(str) {
    let strNew = str.substring(1, str.length - 1)

    return strNew
}

console.log(withoutFirstAndLastChars("JavaScript"));

// option second, using array methods
function withoutFirstAndLastChars(str) {
    let strSplit = str.split("")
    strSplit.shift()
    strSplit.pop()
    let strToString = strSplit.join("")

    return strToString
}

console.log(withoutFirstAndLastChars("JavaScript"));