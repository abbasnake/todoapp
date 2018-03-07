/*jshint esversion: 6 */

const mongoose = require("mongoose"); // using mongoose for mongoDB

mongoose.connect("mongodb://todolist:todolist@ds245478.mlab.com:45478/todolist"); // connecting to mLab database

const todoSchema = new mongoose.Schema({ // todo item schema
    todo: String,
    created: {type: Date, default: Date.now}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;