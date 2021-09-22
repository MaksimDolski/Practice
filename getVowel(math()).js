function getVowels(str) {
let regexp = /[aeiouy]/gi
let found = str.match(regexp)
let foundLength = found.length

return foundLength
}

console.log(getVowels("All the free things are free in the World!")) 



