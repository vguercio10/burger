// Set up mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

//   This code is making the connection
  connection.connect(function (err) {
      if (err) {
        //   if there is an error this will print
          console.log("error connecting" + err.stack);
          return;
      }
    //   if connection this will print with connection threadID
      console.log("connected as id " + connections.threadID);
  });
// This is exporting the connection for ORM use
  module.exports = connection;