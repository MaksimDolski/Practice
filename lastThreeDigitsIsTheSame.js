function lastThreeDigitsIsTheSame(num1, num2, num3) {
    let num1ToString = num1.toString()
    let a = num1ToString.charAt(num1ToString.length - 1) // the last digit getting

    let num2ToString = num2.toString()
    let b = num2ToString.charAt(num2ToString.length - 1)

    let num3ToString = num3.toString()
    let c = num3ToString.charAt(num3ToString.length - 1)

    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
        if (a == b && b == c) {
            return "Last digit of the three given positive numbers is the same"
        } else {
            return "Last digit of the three given positive numbers is NOT the same"
        }
    } else {
        return false
    }
  
    }

console.log(lastThreeDigitsIsTheSame(20, 2000, 120));