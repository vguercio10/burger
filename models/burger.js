// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(`burgers`, function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne(`burgers`, val, function(res) {
            cb(res);
        })
    },
    updateOne: function(colName, val, condition, cb) {
        orm.updateOne(`burgers`, colName, val, condition, function(res) {
            cb(res);
    });
}
};
// Export the database functions for the controller (burgers_controllers.js)
module.exports = burger;