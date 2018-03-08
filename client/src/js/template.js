/*jshint esversion: 6 */
import { $, $$ } from "./helpers.js";

const todoTemplate = (todo, id) => {
    return `
    <li class="todo">
        <form action="api/todo" method="DELETE">
            ${todo}
            <button type="submit" value="${id}" class="delete">X</button>
        </form>
    </li>
    `;
};

const getList = (data) => {
    let template = "";
    for(let item in data.todos) {
        const currentTodo = data.todos[item].todo;
        const currentId = data.todos[item]._id;

        template += todoTemplate(currentTodo, currentId);
    }
    $(".todos").innerHTML = template;
};


export { getList };