function findNearestNum(num1, num2){
if(num1 > num2 && num1 <= 100) {
return "num1 is nearest to 100"
} else if (num1 == num2) {
    return "Two numbers have the same value"
} else {
    return "num2 in nearest to 100"
}  

}

console.log(findNearestNum(19,85));