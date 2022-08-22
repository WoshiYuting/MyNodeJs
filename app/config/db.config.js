const mysql = require("mysql")

const db = mysql.createConnection({
    // host : "localhost",
    host : '127.0.0.1',
    database : "nodejs",
    user : "root",
    password : "3MLzX7X24gWrSb4B",
    port : "3307"
});
// const db = mysql.createConnection({
//     host : "localhost",
//     database : "nodejs",
//     user : "root",
//     password : "",
// });

db.connect();

module.exports = db;