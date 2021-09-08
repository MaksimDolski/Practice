function getTwoIntegers(a,b) {
    let result
    if(a > 0 && b > 0 && a != b) {
result = a + b
    } else {
result = (a + b) * 3
    }
    return result
}

console.log(getTwoIntegers(10,10));