// const name = 'John';
const age = 30;

const str = `My name is ${name} and I am ${age} years old.`;

console.log(str); // Output: My name is John and I am 30 years old.

console.log(str.length); // Output: 13



console.log(str.charAt(0)); // Output: H
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.indexOf('o')); // Output: 4
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.split(',')); // Output: ["Hello", " world!"]
console.log(str.replace('o', 'a')); // Output: Hella, world!
console.log(str.replaceAll('o', 'a')); // Output: Hella, warld!
console.log(str.includes('world')); // Output: true
console.log(str.startsWith('Hello')); // Output: true
console.log(str.endsWith('!')); // Output: true
console.log(str.trim()); // Output: Hello, world!
console.log(str.repeat(2)); // Output: Hello, world!Hello, world!

/* charAt(index): Returns the character at a specified index.
toUpperCase(): Returns a new string with all the characters converted to uppercase.
toLowerCase(): Returns a new string with all the characters converted to lowercase.
indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.
substring(startIndex, endIndex): Returns a new string containing the characters between startIndex and endIndex.
slice(startIndex, endIndex): Similar to substring(), but allows for negative indices.
split(separator, limit): Splits a string into an array of substrings based on a specified separator.
replace(searchValue, replaceValue): Replaces the first occurrence of a specified value in a string.
replaceAll(searchValue, replaceValue): Replaces all occurrences of a specified value in a string.
includes(searchValue, fromIndex): Checks if a string contains a specified value.
startsWith(searchValue, position): Checks if a string starts with a specified value.
endsWith(searchValue, position): Checks if a string ends with a specified value.
trim(): Removes whitespace from both ends of a string.
repeat(count): Returns a new string with the specified number of copies of the original string.
*/

/*
const str1 = 'apple';
const str2 = 'banana';

console.log(str1 > str2); // Output: false
console.log(str1 < str2); // Output: true
console.log(str1 == str2); // Output: false
console.log(str1 != str2); // Output: true



const str = 'Hello, world!\nThis is a new line.';
console.log(str);

*/