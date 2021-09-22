function divideNumsToString(num1, num2) {
let result = (num1 / num2).toFixed().toString()
let resultSplit = result.split("").join(", ")


return resultSplit
}

console.log(divideNumsToString(80,6))