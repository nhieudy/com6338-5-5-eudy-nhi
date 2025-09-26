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
var input = document.querySelector("input");
var ul = document.querySelector("#todo-list"); //selecting the ul #todo-list

//On submission
form.onsubmit = function(e){
e.preventDefault();
var toDo = document.querySelector("input").value; //selecting the input's value
//If no value OR only spaces, do not do anything
toDo = toDo.trim(); //Removes white spaces from both side of string, then checks if its nothing
if(toDo === ""){
    return;
}
var li = document.createElement("li"); //create li element
var todoBtn = document.createElement("button"); //create button element
todoBtn.setAttribute('class', 'todo-item'); 
var todoText = document.createTextNode(toDo); //create text node to append to button
todoBtn.appendChild(todoText);//appends text to button
li.appendChild(todoBtn); //appends button to li
ul.appendChild(li); //appends li to ul
form.reset();

var todoList = document.querySelectorAll(".todo-item"); //selector all returns everything with class in a node class


//Something is wrong here. My for loop may be wrong.
for (var i = 0; i <todoList.length; i++){ //Need to do this, since its not just one
    todoList[i].addEventListener("click", function(e){
        var check = e.target.classList.contains("todo-item")
        if(check){ //classList returns the CSS Classnames of an element
        console.log("finished"); 
       //"target reference to the object which the event was dispatched"
        e.target.style.textDecoration = "line-through";
        todoBtn.setAttribute('class', 'todo-done'); 
        
        }
        else{
            console.log("remove")
            //console.log(e.target.parentElement);
           // e.target.parentElement.remove();
        }
 
        })
}
}




