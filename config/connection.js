// Set up mysql connection
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    user: "q5oaewize9g017ct",
    password: "cilremxkdiqmwav7",
    database: "ueuechroeq7lg5nb"
  })
}
//   This code is making the connection
  connection.connect(function (err) {
      if (err) {
        //   if there is an error this will print
          console.log("error connecting" + err.stack);
          return;
      }
    //   if connection this will print with connection threadID
      console.log("connected as id " + connection.threadID);
  });
// This is exporting the connection for ORM use
  module.exports = connection;