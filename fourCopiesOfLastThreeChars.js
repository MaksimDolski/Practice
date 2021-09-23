function fourCopiesOfLastThreeChars(str) {

    let strSubstring = str.substring(str.length - 3)
    let strRepeat = strSubstring.repeat(4)

    return strRepeat

}

console.log(fourCopiesOfLastThreeChars('JavaScript'));