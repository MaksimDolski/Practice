function getDifference(num) { 
let result
if(num <= 13)  {
   result = 13 - num
} else {
    result = (num - 13) * 2
}
return result
}

console.log(getDifference(20))
console.log(getDifference(10))