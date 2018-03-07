/*jshint esversion: 6 */

const express          = require("express");           // using express framework                   
const path             = require("path");              // path module                            
const bodyParser       = require("body-parser");       // for json parsing                
const expressSanitizer = require("express-sanitizer"); // defense against injections    

const port = process.env.PORT || 3000; // set port
const app  = express();                // initialize express app

app.use(bodyParser.urlencoded({extended: true})); // setting body-parser
app.use(bodyParser.json());                       // setting body-parser
app.use(expressSanitizer());                      // for avoiding injections, this has to be after body-parser
app.use(express.static("client/public"));         // setting static file directory

app.set("views", path.join(__dirname, "server/views")); // views
app.set("view engine", "ejs");                          // view engine

app.use(require("./server/controllers/routes")); // all requests go here

app.listen(port, () => console.log(`ajax app listening on port ${port}`)); // listening