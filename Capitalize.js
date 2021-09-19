function firstLetterCapitalize(str) {


let strSplit = str.split(" ")
for(let i = 0; i < strSplit.length; i++) {
strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1)

}
return strSplit

}

console.log(firstLetterCapitalize("This function slices a given string from a specified “start” position until the specified “end” position."))