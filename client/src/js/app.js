/*jshint esversion: 6 */
import { $, $$ } from "./helpers.js";
import { fetchTodos, addTodo, deleteTodo } from "./fetchAPI.js";

$(".get").addEventListener("click", fetchTodos); // get button
$(".add").addEventListener("click", addTodo);    // add button
