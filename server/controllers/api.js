/*jshint esversion: 6 */
const express = require("express");
const router  = express.Router();
const Todo    = require("../models/db.js");

router.get("/api/todo", (req, res) => { // GET ROUTE
    Todo.find({}, (err, todos) => { // get all todos
        err ? console.log(err) : res.json({todos: todos});
   });
});

router.post("/api/todo", (req, res) => { // POST ROUTE
    req.body.todo = req.sanitize(req.body.todo); // sanatizing request 

    Todo.create(req.body, (err, newTodo) => { // create new todo
        err ? console.log(err) : res.json({newTodo: newTodo});
    });
});

router.delete("/api/todo", (req, res) => { // DELETE ROUTE
    req.body.todo = req.sanitize(req.body.todo); // sanatizing request 

    Todo.findByIdAndRemove(req.body.id, (err) => { // delete a todo
        err ? console.log(err) : res.send("a todo has been deleted");
    });
});

module.exports = router;