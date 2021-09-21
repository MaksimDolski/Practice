function aAndBAreSeparated(str) {
    let strArr = str.split('')

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == 'a') {
            if (strArr[i + 1] == 'b' || strArr[i + 3] == 'b') {
                return true
            } else {
                return false
            }
        }
    }
}

console.log(aAndBAreSeparated('acc'));