function stringInAlphabeticalOrder(str) {
let toArr = str.split(' ')
let toArrSort = toArr.sort()
let toString = toArrSort.join(' ')

return toString
}

console.log(stringInAlphabeticalOrder('write js program a b r dedw wd dw '))