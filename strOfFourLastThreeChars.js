function strOfFourLastThreeChars(str) {
    if (str.length >= 3) {
        let newStr = str.substring(str.length - 3)
        let newStrCopy = newStr.repeat(4)
        return newStrCopy
    } else {
        return 'The string must be 3 and above'
    }
}

console.log(strOfFourLastThreeChars('Jav'));