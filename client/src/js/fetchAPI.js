/*jshint esversion: 6 */

import { $, $$ } from "./helpers.js";
import { getList } from "./template.js";

const url = "/api/todo"; // setting the api path

const fetchTodos = () => { // GET TODOS function
    fetch(url)             // FetchAPI GET
    .then(res => res.json())
    .then(todos => {
        getList(todos);
        const buttons = $$(".delete"); // after getting the list add event listeners fo delete buttons
        buttons.forEach((button) => {
            button.addEventListener("click", deleteTodo);
        });
    });
};


const addTodo = (e) => {                 // POST TODO function
    e.preventDefault();                  // prevent page reload
    const todoValue = $(".input").value; // get the input value of the new todo
    fetch(url, {                         // FetchAPI POST
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({todo: todoValue})
    })
    .then(fetchTodos()); // after inserting new todo get the whole list
};

const deleteTodo = (e) => {    // DELETE TODO function
    e.preventDefault();        // prevent page reload
    const id = e.target.value; // get the id of the todo to be deleted
    fetch(url, {               // FetchAPI DELETE
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({id: id})
    })
    .then(fetchTodos()); // after deleting a todo get the whole list
};

export {fetchTodos, addTodo, deleteTodo};