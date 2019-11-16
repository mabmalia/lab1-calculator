# Lab 1 - Basics

## Preparation

### 1) HTML -> DOM-tree

Your task is to convert the HTML file `preparation/part1/document.html` to a DOM-tree similar to the one found 
[here on W3Schools](https://www.w3schools.com/js/js_htmldom.asp).
 
 *Some tips:*
- Make sure you've read up on the DOM
   - [Introduction to DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
   - [The HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
 - Read the HTML file carefully.
 
### 2) DOM-tree -> HTML

As you've managed to convert the HTML to a DOM-tree, you should now be able to do the reverse. Try converting the tree 
found in `preparation/part2/dom_tree.pdf` into an HTML-file.  
*Note:* Styling is optional.

## Calculator

In this task you are to implement the functionality for a simple calculator. You have been given template html and css  
in the folder `calculator_template` but as you will notice, clicking the buttons does nothing. Your task is to add 
javascript code so that the buttons do as expected (like a normal calculator). This will require you to learn how to 
traverse/select elements from the DOM-tree and handle their values. Functionality should be added for all buttons.

*Some tips:*
- You should let your code run after the `DOMContentLoaded` event is triggered. See link below. Also, try reasoning about 
why this is important to do.
- Pay attention to the classes and/or ids of the elements in the HTML-DOM. They can be useful for selecting elements. 
Feel free to customize the elements and add your own classes and/or ids.


*Some Resources:*  
[Document: DOMContentLoaded event - MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

[JavaScript Selecting DOM Elements - W3Schools](https://www.w3schools.com/js/js_htmldom_elements.asp)

[JavaScript Adding Event Listeners - W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)