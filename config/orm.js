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
    insertOne: function(tableInput, val, cb) {
      var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUES (?, ?);";
      var query = connection.query(queryString, [val, false], function(err, result) {
        if(err) {
          throw err;
        }
        cb(result);
      });
      console.log("generated query", query.sql);
    },
    updateOne: function(tableInput, colName, val, condition, cb) {
      var queryString = "UPDATE " + tableInput + " SET " + colName + " = " + val + " WHERE " + condition;
      console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

}

// Export the orm object for the model (burger.js).
module.exports = orm;