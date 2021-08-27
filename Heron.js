function findArea(a,b,c) {

// Area of a triangle using Heron formula
let p = (a + b + c) / 2
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
let result = s.toFixed()

return result
}

console.log("Area of a triangle is: " + findArea(5,6,7) + " cm2")
