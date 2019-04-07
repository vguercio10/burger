// Requiring express package
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serving stating contect for the app from the "public" directory in the application directory

app.use(express.static("public"));

// Parse the application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// set handlebars
var exhbs = require("express-handlebars");

// This is importing the routes and giving the server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });