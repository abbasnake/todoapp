/*jshint esversion: 6 */
const express = require("express");
const router  = express.Router();

router.get("/", (req, res) => res.render("home")); // render view
router.all("/api/todo", require("./api.js"));      // fetch api routes

module.exports = router;