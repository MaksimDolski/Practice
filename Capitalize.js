function firstLetterCapitalize(str) {


let strToUpperCase = str.split(" ")
for(let i = 0; i < strToUpperCase.length; i++) {
strToUpperCase[i] = strToUpperCase[i].charAt(0).toUpperCase() + strToUpperCase[i].slice(1)
strJoin = strToUpperCase.join(" ")

}
return strJoin
}

console.log(firstLetterCapitalize("This function slices a given string from a specified position until the specified position."))
