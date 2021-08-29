// (60°C × 9/5) + 32 = 140°F
// (11°F − 32) × 5/9 = -11.67°C

let c = 60
let f = 25

let cForm = ((c * 9/5) + 32).toFixed(2)
let fForm = ((f - 32) * 5/9).toFixed(2)

console.log(c + "°C is " + cForm + "°F" )
console.log(f + "°F is " + fForm + "°C")

