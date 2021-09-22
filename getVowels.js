function getVowels(str) { 
let vowels = "a,e,i,o,u,y"
str = str.toLowerCase()
let count = 0

for(let i = 0; i < str.length; i++) {
  for(let j = 0; j < vowels.length; j++) {
  if(str[i] == vowels[j]) {
    count += 1 
      } 
      } 
    }
    return count
}

console.log(getVowels("All the free things are free in the World!")) 



