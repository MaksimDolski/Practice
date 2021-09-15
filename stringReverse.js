function stringReverse(str) {
    let strToArr = str.split('').reverse().toString()
    let strReplace = strToArr.replace(/,/g,'') // using g - like global flag
    return strReplace
}

console.log(stringReverse('hello12345678'));



// using join() method
function stringReverse(str) {
    let strToArr = str.split('').reverse().join('')
    return strToArr
}

console.log(stringReverse('hello12345678'));