function getEqualNumbersOfChar(str) {

let strSplit = str.split('')
let pSum = strSplit.filter(elem => elem == 'p').length
let sSum = strSplit.filter(elem => elem == 's').length

let result = pSum == sSum ? true : false


return result
}

console.log(getEqualNumbersOfChar("pppp aaa dd ssss"))

