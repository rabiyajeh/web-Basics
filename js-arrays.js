//Arrays in JavaScript are used to store multiple values in a single variable. They are a fundamental data type and can hold values of any type, including numbers, strings, objects, and even other arrays.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
const arr3 = Array.of(1, 2, 3, 4, 5);
const arr4 = Array(5).fill(0); // Creates an array of 5 elements, all set to 0
//Array elements can be accessed using their index, which starts at 0.

const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
console.log(arr[2]); // Output: 3

//Array elements can be modified by assigning a new value to their index.

arr[0] = 10;
console.log(arr); // Output: [10, 2, 3, 4, 5]

//Arrays in JavaScript have properties and methods that can be used to manipulate and work with them.
const arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

const slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]

arr.splice(1, 2, 10, 11);
console.log(arr); // Output: [1, 10, 11, 4, 5]

const concatenatedArr = arr.concat([6, 7, 8]);
console.log(concatenatedArr); // Output: [1, 10, 11, 4, 5, 6, 7, 8]

const joinedStr = arr.join('-');
console.log(joinedStr); // Output: 1-10-11-4-5

arr.reverse();
console.log(arr); // Output: [5, 4, 11, 10, 1]

arr.sort();
console.log(arr); // Output: [1, 10, 11, 4, 5]

arr.forEach(function(element) {
  console.log(element);
});
// Output:
// 5
// 4
// 11
// 10
// 1

const mappedArr = arr.map(function(element) {
  return element * 2;
});
console.log(mappedArr); // Output: [2, 20, 22, 8, 10]

const filteredArr = arr.filter(function(element) {
  return element > 5;
});
console.log(filteredArr); // Output: [11, 10]

const foundElement = arr.find(function(element) {
  return element > 5;
});
console.log(foundElement); // Output: 11

const foundIndex = arr.findIndex(function(element) {
  return element > 5;
});
console.log(foundIndex); // Output: 2

const includes = arr.includes(10);
console.log(includes); // Output: true

const some = arr.some(function(element) {
  return element > 5;
});
console.log(some); // Output: true

const every = arr.every(function(element) {
  return element > 5;
});
console.log(every); // Output: false

const reducedArr = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(reducedArr); // Output: 33

const reducedRightArr = arr.reduceRight(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(reducedRightArr); // Output: 33
/*
Methods
push(element1, ..., elementN): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
shift(): Removes the first element from an array and returns that element.
unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array and returns the new length of the array.
slice(startIndex, endIndex): Returns a new array containing a portion of the original array.
splice(startIndex, deleteCount, item1, ..., itemN): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
concat(array1, array2, ..., arrayN): Returns a new array containing the elements of the original array and the elements of the specified arrays.
join(separator): Joins all elements of an array into a string.
reverse(): Reverses the order of the elements in an array.
sort(compareFunction): Sorts the elements of an array in place and returns the sorted array.
forEach(callback(currentValue, index, arr), thisValue): Executes a provided function once for each array element.
map(callback(currentValue, index, arr), thisValue): Creates a new array with the results of calling a provided function on every element in the array.
filter(callback(currentValue, index, arr), thisValue): Creates a new array with all elements that pass the test implemented by the provided function.
find(callback(currentValue, index, arr), thisValue): Returns the value of the first element in the array that satisfies the provided testing function.
findIndex(callback(currentValue, index, arr), thisValue): Returns the index of the first element in the array that satisfies the provided testing function.
includes(searchElement, fromIndex): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
some(callback(currentValue, index, arr), thisValue): Tests whether at least one element in the array passes the test implemented by the provided function.
every(callback(currentValue, index, arr), thisValue): Tests whether all elements in the array pass the test implemented by the provided function.
reduce(callback(accumulator, currentValue, index, arr), initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
reduceRight(callback(accumulator, currentValue, index, arr), initialValue): Executes a reducer function on each element of the array, resulting in a single output value, working from right to left. */

//Arrays can also contain other arrays, creating multidimensional arrays.

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(arr[1][2]); // Output: 6
  
  //Arrays can be iterated over using various methods, including for, for...of, forEach(), map(), filter(), and reduce()

  const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5

for (let element of arr) {
  console.log(element);
}
// Output:
// 1
// 2
// 3
// 4
// 5

arr.forEach(function(element) {
  console.log(element);
});
// Output:
// 1
// 2
// 3
// 4
// 5
//Arrays can be manipulated using various methods, including push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort(), forEach(), map(), filter(), find(), findIndex(), includes(), some(), every(), reduce(), and reduceRight().