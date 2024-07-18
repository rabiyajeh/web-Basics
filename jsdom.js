document.title = "I am dom"
console.log(document.body)
document.body.style.backgroundColor = " red"
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the page so that programs can change the document structure, style, and content.

//DOM elements can be accessed using various methods, including document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName(), and document.querySelector().
// Accessing an element by its ID
const elementById = document.getElementById('myElement');

// Accessing elements by their class name
const elementsByClassName = document.getElementsByClassName('myClass');

// Accessing elements by their tag name
const elementsByTagName = document.getElementsByTagName('div');

// Accessing the first element that matches a CSS selector
const elementBySelector = document.querySelector('.myClass');

//DOM elements can be modified using various methods, including element.innerHTML, element.textContent, element.style, and element.classList.

// Changing the inner HTML of an element
elementById.innerHTML = '<h1>Hello, world!</h1>';

// Changing the text content of an element
elementById.textContent = 'Hello, world!';

// Changing the style of an element
elementById.style.color = 'red';
elementById.style.fontSize = '20px';

// Adding a class to an element
elementById.classList.add('myClass');

// Removing a class from an element
elementById.classList.remove('myClass');

// Toggling a class on an element
elementById.classList.toggle('myClass');

//DOM elements can respond to user interactions using event handlers, which are functions that are called in response to events.

// Adding an event listener to an element
elementById.addEventListener('click', function() {
    console.log('Element clicked!');
  });
  
  //Here's an example of using the DOM to change the content of an element:
// Accessing an element by its ID
const elementById = document.getElementById('myElement');

// Changing the text content of an element
elementById.textContent = 'Hello, world!';

