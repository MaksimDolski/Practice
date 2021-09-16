function charByAlphabet(str) {

    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    let strSplit = str.split('')

    for (let i = 0; i < strSplit.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (strSplit[i] == 'z') {
                strSplit[i] = 'a'
                result += strSplit[i]

            } else if (strSplit[i] == abc[j]) {
                result += abc[j + 1]
            }
        }
    }
    return result
}

console.log(charByAlphabet('python'))