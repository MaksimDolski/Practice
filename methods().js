// The most popular methods in JS

// ******** some() *********
// The some() tests that at least one element in the array passes the test by the provided function

const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// option 1:
const someMethod = (num) => num > 7
console.log((arr2.some(someMethod))); // true

// option 2:
function someMethod(num) {
    return num > 7
}
// console.log(arr2.some(someMethod));

//option 3:
console.log(arr2.some(num=> num > 7));


// ********* reduce() **********
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const reducer = (a, b) => a + b
console.log(arr2.reduce(reducer));

console.log(arr2.reduce((a, b) => a + b));

// ********* every() ********* 
// tests that all the elements in the arr satisfy by the func
console.log(arr2.every(num => typeof(num) == 'number'));
console.log(arr2.every(num => num > 0));


// ********* map() *********
// This method creates new array using function for every element in the array
console.log(arr2.map(num => num * 2));

const result = arr2.map(num=> num * 2)
console.log(result);

// ********* filter() *********
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const newData = [
{id: 1, name: 'eBay'},
{id: 2, name: 'Ali'},
{id: 3, name: 'Google'},
{id: 4, name: 'Apple'},
]
const a = newData.filter(elem => elem.name === 'eBay')
console.log(a);
const b = newData.filter(elem => elem.name.length > 3)
console.log(b);


// ********* forEach() *********
// Makes function for each array element
const result = newData.forEach(elem => console.log(elem.name + "Z"))


 // ********* find() *********
 // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

 const result2 = arr2.find(num => num > 2)
 console.log(result2); // 3 


  // ********* sort() *********
  // The sort() method sorts the elements of an array in place and returns the sorted array.
console.log(arr2.sort((a, b) => b - a));

  // ********* concat() *********
// This method merges two or more arrays in one. Returns a new array.
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]
let array3 = array1.concat(array2)
console.log(array3);

