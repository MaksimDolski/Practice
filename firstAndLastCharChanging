function firstAndLastCharChanging(str) {
    if (str.length >= 2) {
        let firstChar = str.substring(0, 1)
        let lastChar = str.substring(str.length - 1)

        let step1 = str.replace(lastChar, firstChar)
        let step2 = step1.replace(step1[0], lastChar)

        return step2
    } else {
        return "String should be at least 2 characters"
    }

}


console.log(firstAndLastCharChanging("String"));