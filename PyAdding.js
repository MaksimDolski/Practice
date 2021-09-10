function pyAdding(str) {

    if (str.substring(0, 2) === 'Py') {
        return str
    } else {
        let strSplit = str.split()
        let pyAdd = strSplit.unshift('Py')
        let strToString = strSplit.toString().replace(',', '')

        return strToString
    }

}

console.log(pyAdding("thon"));

// option 2

function pyAdding(str) {
    if (str.substring(0, 2) === 'Py') {
        return str
    } else {
        return "Py" + str
    }
}
console.log(pyAdding('thon'));
console.log(1);
console.log(2);