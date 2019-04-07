// Requiring express 
var express = require("express");

var router = express.Router();

// Importing the model burger.js file, its to use its database functions.
var burger = require("../models/burger");

















// Export routes for server.js to use.
module.exports = router;