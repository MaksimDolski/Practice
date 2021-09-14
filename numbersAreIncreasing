function numbersAreIncreasing(num) {

    for (let i = 0; i < num.length - 1; i++) { // "length - 1" - because the last index do not have a couple
        for (let j = 0; j < num.length - 1; j++) {
            if (num[j] > num[j + 1]) { // 3 > 1 - true
                let temp = num[j] // 3
                num[j] = num[j + 1] // 3 => next position
                num[j + 1] = temp // 1 = temp => num[j]
            }
        }
    }
    return num
} 

console.log(numbersAreIncreasing([1, 3, 2, 432, 33, 559]))
