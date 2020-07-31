console.log('hello its YOGESH ');

// selctors

const todoInput = document.querySelector(".todo-input");
const todoInputButton = document.querySelector(".todo-button");
const todoAddList = document.querySelector(".todo-list");
const selectedItem = document.querySelector(".selection");

//Event Listener

todoInputButton.addEventListener("click", addTodo);
todoAddList.addEventListener("click", toDelete);
selectedItem.addEventListener("click", segrigation);
document.addEventListener("DOMContentLoaded", restoreFromStroge);



// Function



function addTodo(e) {
    // This is to prevent form from submitting 
    // as this button insite the from it will be redirected to another page 
    // prevent Defauth will not be suggested so spell properly 
    e.preventDefault();
    console.log(e);

    //add list in proper structue
    const todoStructue = document.createElement("div");
    todoStructue.classList.add("todo-structure")

    // adding list
    const dooo = document.createElement("li");
    dooo.classList.add("dooo");
    dooo.innerText = todoInput.value;
    todoStructue.appendChild(dooo);

    //add submit button
    const doooTickButton = document.createElement("button");
    doooTickButton.innerText = "Tick";
    doooTickButton.classList.add("dooo-tick-button");
    todoStructue.appendChild(doooTickButton);

    //add delete button
    const doooDelButton = document.createElement("button");
    doooDelButton.innerText = "Del";
    doooDelButton.classList.add("dooo-delete-button");
    todoStructue.appendChild(doooDelButton);

    //add structure to ul
    todoAddList.appendChild(todoStructue);

    //add to local strogae after completing the html and css 
    storeTodo(todoInput.value);

    //reset input value
    todoInput.value = "";

}

// fuctionanality to delete  and strike out doooo

function toDelete(e) {

    //To delete the value 

    // console.log(e.target);
    // console.log(e.target.classList);
    const tar = e.target;
    if (tar.classList[0] === "dooo-delete-button") {

        console.log("ABOUT TO DELETE NOW ");
        console.log(e);
        console.log(e.target);
        console.log(e.target.parentElement);

        //just a small rotation
        e.target.parentElement.classList.add("fall-transition");
        e.target.parentElement.addEventListener("transitionend", function () {
            // to completely remove
            console.log("fade Complete");
            e.target.parentElement.remove();
        });

        //To remove from local Stroge 
        text = e.target.parentElement.children[0].innerText;
        deleteFromStroge(text);


    };

    // To strike off the value 

    if (tar.classList[0] === "dooo-tick-button") {
        console.log("sunny leone");
        console.log(tar.parentElement);
        console.log(tar.parentElement.classList);
        console.log(tar.parentElement.classList);
        console.log(tar.parentElement.classList.toggl);

        tar.parentElement.classList.add("strike-off")


        // tar.parentEelement.classList.toggle("strike-off");
    }


}

//SEGRICATION

function segrigation(e) {

    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    const option = e.target.value;
    const todos = document.querySelector(".todo-list").childNodes;

    console.log(todos);
    console.log(typeof (todos));
    switch (option) {

        case "all":
            todos.forEach(element => {
                element.style.display = "flex";
            })

            break;
        case "pending":
            todos.forEach(element => {
                console.log(element);
                if (!element.classList.contains("strike-off")) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }

            });

            break;

        case "completed":
            todos.forEach(element => {
                console.log(element);
                if (element.classList.contains("strike-off")) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }

            });

            break;
    };


}

// Adding  TO-DO  local stroge 

function storeTodo(item) {

    let items;
    if (localStorage.getItem("dooo") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("dooo"));
    }

    items.push(item);

    //Add to local stroge in JSON format
    localStorage.setItem("dooo", JSON.stringify(items));

}

// Deleting To Do list when Deleted in UI

function deleteFromStroge(item) {

    // if (localStorage.getItem("dooo") === null) {
    //     console.log("All elements are empty now");
    //     return;
    // } else {
    let items;
    items = JSON.parse(localStorage.getItem("dooo"));
    let index = items.indexOf(item);
    // verifing the item to be deleted on the console
    console.log(item);
    console.log(index);
    //removing the item 
    items.splice(index, 1);

    localStorage.setItem("dooo", JSON.stringify(items));
    // }



}

// Restoring the values to UI from stroge when refreshed 

function restoreFromStroge() {

    let items;
    if (localStorage.getItem("dooo") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("dooo"));
    }

    //Loop trought array and add elements to UI
    items.forEach(function (i) {

        //add list in proper structue
        const todoStructue = document.createElement("div");
        todoStructue.classList.add("todo-structure")

        // adding list
        const dooo = document.createElement("li");
        dooo.classList.add("dooo");
        dooo.innerText = i;
        todoStructue.appendChild(dooo);

        //add submit button
        const doooTickButton = document.createElement("button");
        doooTickButton.innerText = "Tick";
        doooTickButton.classList.add("dooo-tick-button");
        todoStructue.appendChild(doooTickButton);

        //add delete button
        const doooDelButton = document.createElement("button");
        doooDelButton.innerText = "Del";
        doooDelButton.classList.add("dooo-delete-button");
        todoStructue.appendChild(doooDelButton);

        //add structure to ul
        todoAddList.appendChild(todoStructue);
    })


}