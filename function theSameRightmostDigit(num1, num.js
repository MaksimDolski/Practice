function theSameRightmostDigit(num1, num2, num3) {
    let num1Str = num1.toString()
    let num1StrCharAt = num1Str.charAt(num1Str.length - 1)

    let num2Str = num2.toString()
    let num2StrCharAt = num2Str.charAt(num2Str.length - 1)

    let num3Str = num3.toString()
    let num3StrCharAt = num3Str.charAt(num3Str.length - 1)

    if (num2StrCharAt >= 0 && num2StrCharAt >= 0 && num2StrCharAt >= 0) {
        if ((num1StrCharAt == num2StrCharAt && num2StrCharAt == num3StrCharAt) || (num1StrCharAt == num2StrCharAt || num2StrCharAt == num3StrCharAt || num1StrCharAt == num3StrCharAt)) {
            return 'Three or two given numbers have the same rightmost digit'
        } else {
            return false
        }
    }
}

console.log(theSameRightmostDigit(21, 20, 60));

// or we can use % 10 => num1 % 10 === num2 % 10 === ....