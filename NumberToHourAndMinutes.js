function NumberToHourAndMinutes(num) {
    let hours = Math.floor(num / 60)
    let minutes

    if (num % 60 != 0) {
        minutes = num % 60
        return `Time is ${hours} hours and ${minutes} minutes`
    } else {
        return `Time is ${hours} hours`
    }
}

console.log(NumberToHourAndMinutes(238));