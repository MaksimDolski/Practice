function wordFinding(str) {
    let strFind = str.includes('Script')
    if (strFind == true) {
        return true
    } else {
        return false
    }
}

console.log(wordFinding('Write a JavaScript program toer a string Scritp'));
