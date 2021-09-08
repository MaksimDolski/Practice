function getAbsoluteDifference(num) {
let result
if(num > 19) {
 result = (num - 19) * 3
} else {
    result = num - 19
}
return result
}

console.log(getAbsoluteDifference(5));

