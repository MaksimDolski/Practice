let d = new Date()
let dayOfTheWeek = d.getDay()

function whatDay() {
switch(dayOfTheWeek) {
case 0:
day = 'Sunday'
break;

case 1:
day = 'Monday'
break;

case 2:
day = 'Tuesday'
break;

case 3:
day = 'Wednesday'
break;

case 4:
day = 'Thursday'
break;

case 5:
day = 'Friday'
break;

case 6:
day = 'Saturday'
break;

case 7: 
day = 'Sunday'
break;

}

return day;

}

function pmAm() {
let h = d.getHours()
let m = d.getMinutes()
let s = d.getSeconds()

if(h >= 12) {
console.log("Current time is: " + h + " PM" + ":" + m + ":" + s)
} else {
console.log("Current time is: " + h + " AM" + ":" + m + ":" + s)
}

}

console.log("Today is: " + whatDay())
console.log(pmAm())

