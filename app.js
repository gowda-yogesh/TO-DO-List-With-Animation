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

    //reset input value
    todoInput.value = "";

}

// fuctionanality to delete  and strike out doooo

function toDelete(e) {
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

    };

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
