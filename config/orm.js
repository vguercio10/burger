// This is importing the mysql connection
var connection = require("../config/connection");

var orm = {
    // This is going to retrive the data from the table
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(tableInput, burger_name, cb) {
      var queryString = "INSERT INTO `burgers` (burger_name, devoured) VALUES (?, ?);";
      var query = connection.query(queryString, [burger_name, false], function(err, result) {
        if(err) {
          throw err;
        }
        cb(result);
      });
      console.log("generated query", query.sql);
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;