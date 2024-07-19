
let fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // Adds "orange" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

let lastFruit = fruits.pop(); // Removes "orange" from the end of the array
console.log(fruits); // Output: ["apple", "banana", "mango"]
console.log(lastFruit); // Output: "orange"




let slicedFruits = fruits.slice(1, 3); // Creates a new array with elements from index 1 to 2
console.log(slicedFruits); // Output: ["banana", "mango"]

fruits.splice(1, 2, "kiwi", "pear"); // Removes 2 elements from index 1 and adds "kiwi" and "pear"
console.log(fruits); // Output: ["apple", "kiwi", "pear", "orange", "grape"]


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]



let sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum); // Output: 15


let foundNumber = numbers.find(function(num) {
  return num > 3;
});
console.log(foundNumber); // Output: 4

let foundIndex = numbers.findIndex(function(num) {
  return num > 3;
});
console.log(foundIndex); // Output: 3


let numbers = [1, 2, 3, 4, 5];
let includesThree = numbers.includes(3);
console.log(includesThree); // Output: true

let hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true
let allEvenNumbers = numbers.every(function(num) {
  return num % 2 === 0;
})


let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // Output: false

let numbers = [1, 2, 3, 4, 5];
let firstIndex = numbers.indexOf(3);
console.log(firstIndex); // Output: 2

let lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex); // Output: 2


let numbers = [1, 2, [3, 4], [5, [6, 7]]];
let flattenedNumbers = numbers.flat(2); // Flattens the array to depth 2
console.log(flattenedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]

let mappedNumbers = numbers.flatMap(function(num) {
  return num * 2;
});
console.log(mappedNumbers); // Output: [2, 4, 6, 8, 10, 12, 14]

let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3); // Fills the array with 0 from index 1 to 2
console.log(numbers); // Output: [1, 0, 0, 4, 5]

numbers.copyWithin(0, 3); // Copies elements from index 3 to the start of the array
console.log(numbers); // Output: [4, 5, 0, 0, 5]


let numbers = [1, 2, 3, 4, 5];
let entries = numbers.entries();
console.log(entries.next().value); // Output: [0, 1]

let keys = numbers.keys();
console.log(keys.next().value); // Output: 0

let values = numbers.values();
console.log(values.next().value); // Output: 1

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.at(2)); // Output: 3
console.log(numbers.at(-1)); // Output: 5

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toLocaleString()); // Output: "1,2,3,4,5" (depends on the locale)

console.log(numbers.toString()); // Output: "1,2,3,4,5"



let numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // Output: true

let fromArray = Array.from(numbers);
console.log(fromArray); // Output: [1, 2, 3, 4, 5]


let numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5

let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8, 9, 10];
let combinedNumbers = numbers.concat(moreNumbers);
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.join("-")); // Output: "1-2-3-4-5"

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

let sortedNumbers = numbers.sort();
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6
// 8
// 10


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


let numbers = [1, 2, 3, 4, 5];
let foundNumber = numbers.find(function(num) {
  return num > 3;
});
console.log(foundNumber); // Output: 4


let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(function(num) {
  return num > 3;
});
console.log(foundIndex); // Output: 3

let numbers = [1, 2, 3, 4, 5];
let includesThree = numbers.includes(3);
console.log(includesThree); // Output: true


let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // Output: true


let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); // Output: false


let numbers = [1, 2, [3, 4], [5, [6, 7]]];
let flattenedNumbers = numbers.flat(2); // Flattens the array to depth 2
console.log(flattenedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]


let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.flatMap(function(num) {
  return num * 2;
});
console.log(mappedNumbers); // Output: [2, 4, 6, 8, 10]


let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toLocaleString()); // Output: "1,2,3,4,5" (depends on the locale)

/*Arrays are a fundamental data structure in JavaScript, and they provide a variety of methods for performing operations on them. Here are some of the most commonly used array methods:

push(): Adds one or more elements to the end of an array and returns the new length of the array.

pop(): Removes the last element from an array and returns that element. This method changes the length of the array.

shift(): Removes the first element from an array and returns that element. This method changes the length of the array.

unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) without modifying the original array.

splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

concat(): Returns a new array comprised of this array joined with other array(s) and/or value(s).

join(): Joins all elements of an array into a string and returns this string.

reverse(): Reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.

sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

find(): Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

flatMap(): Maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is potentially more efficient.

fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). It returns the modified array.

copyWithin(): Copies elements within the array to another position in the same array and returns it without modifying its length.

entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

keys(): Returns a new Array Iterator object that contains the keys for each index in the array.

values(): Returns a new Array Iterator object that contains the values for each index in the array.

at(): Returns the element at the specified index, allowing for positive and negative integers. Negative integers count back from the end of the array.

sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

toLocaleString(): Returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").

toString(): Returns a string representing the specified array and its elements.

isArray(): Determines whether the passed value is an Array.

from(): Creates a new Array instance from an array-like or iterable object.

of(): Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

length: Sets or returns the number of elements in an array.

concat(): Joins all elements of an array into a string and returns this string.

join(): Joins all elements of an array into a string and returns this string.

reverse(): Reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.

sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

find(): Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

flatMap(): Maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is potentially more efficient.

fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). It returns the modified array.

copyWithin(): Copies elements within the array to another position in the same array and returns it without modifying its length.

entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

keys(): Returns a new Array Iterator object that contains the keys for each index in the array.

values(): Returns a new Array Iterator object that contains the values for each index in the array.

at(): Returns the element at the specified index, allowing for positive and negative integers. Negative integers count back from the end of the array.

toLocaleString(): Returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").

toString(): Returns a string representing the specified array and its elements.

isArray(): Determines whether the passed value is an Array.

from(): Creates a new Array instance from an array-like or iterable object.

of(): Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

length: Sets or returns the number of elements in an array.

concat(): Joins all elements of an array into a string and returns this string.

join(): Joins all elements of an array into a string and returns this string.

reverse(): Reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.

sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

find(): Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

flatMap(): Maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is potentially more efficient.

fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). It returns the modified array.

copyWithin(): Copies elements within the array to another position in the same array and returns it without modifying its length.

entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

keys(): Returns a new Array Iterator object that contains the keys for each index in the array.

values(): Returns a new Array Iterator object that contains the values for each index in the array.

at(): Returns the element at the specified index, allowing for positive and negative integers. Negative integers count back from the end of the array.

toLocaleString(): Returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").

toString(): Returns a string representing the specified array and its elements.

isArray(): Determines whether the passed value is an Array.

from(): Creates a new Array instance from an array-like or iterable object.

of(): Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

length: Sets or returns the number of elements in an array.

concat(): Joins all elements of an array into a string and returns this string.

join(): Joins all elements of an array into a string and returns this string.

reverse(): Reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.

sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

filter(): Creates a new array with all elements that pass the test implemented by the provided function */