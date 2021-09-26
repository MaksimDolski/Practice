function threeCharsOfOddLengthString(str) {

    if (str.length % 2 != 0) {
        let mid = +(str.length / 2).toFixed()
        return str.substring(mid - 2, mid + 1)
    }
}

console.log(threeCharsOfOddLengthString("JavaScript1"));