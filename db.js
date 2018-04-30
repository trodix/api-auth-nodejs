const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_onf"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql!");
});

module.exports = db;