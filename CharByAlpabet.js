function CharByAlphabet(str) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < abc.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[j] == abc[i]) {
                str[j] = abc[i + 1]
                return str
            }
        }
    }
    return str

}

console.log(CharByAlphabet('abc'));