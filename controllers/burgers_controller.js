// Requiring express 
var express = require("express");

var router = express.Router();

// Importing the model burger.js file, its to use its database functions.
var burger = require("../models/burger");

// Create routes and set up logic in the routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

















// Export routes for server.js to use.
module.exports = router;