// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(`burgers`, burger_name, function(res) {
            cb(res);
        })
    }
}
// Export the database functions for the controller (burgers_controllers.js)
module.exports = burger;