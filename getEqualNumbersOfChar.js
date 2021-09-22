function getEqualNumbersOfChar(str) {
let pSum = 0
let sSum = 0

for(let i = 0; i < str.length; i++) {
	if(str[i] == 'p') {
		pSum += 1
	} else if(str[i] == 's') {
		sSum += 1
	}
  
}
 if(pSum == sSum) {
  return "p and s count is the same"
  } else {
  return "p and s count is not the same"
  }

}

console.log(getEqualNumbersOfChar("pppp aaa dd ssss"))

