//Pseudocode:
//1. Input action item into bar
//2. Enter OR clicking Add button
//3. Item appears below form inside of ul#todo-list element
//Must be attached via a form submit event bc it uses a form to create list items
//When adding to-do item, it must be a button nested inside a li element 
//4. When clicked on, strikethough text decoration
//5. When clicked on again, delete the item
//Note: to add a new HTML DOM, create the node, and then append it
var form = document.querySelector("form"); //selecting form
var ul = document.querySelector("#todo-list"); //selecting the ul #todo-list
//On submission
form.onsubmit = function(e){
e.preventDefault();
var toDo = document.querySelector("input").value; //selecting the input's value
var li = document.createElement("li"); //create li element
var todoBtn = document.createElement("button"); //create button element
var todoText = document.createTextNode(toDo); //create text node to append to button
todoBtn.appendChild(todoText);//appends text to button
li.appendChild(todoBtn); //appends button to li
ul.appendChild(li); //appends li to ul
}