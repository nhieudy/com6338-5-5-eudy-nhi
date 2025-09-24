//Pseudocode:
//1. Input action item into bar
//2. Enter OR clicking Add button
//3. Item appears below form inside of ul#todo-list element
//Must be attached via a form submit event bc it uses a form to create list items
//When adding to-do item, it must be a button nested inside a li element 
//4. When clicked on, strikethough text decoration
//5. When clicked on again, delete the item

var form = document.querySelector("form");
form.onsubmit = function(e){
e.preventDefault();
console.log("test");
var data = document.querySelector("input").value;
console.log(data);
}