var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: 'task',
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected!");
});

function runQuery(query, params, modelsCallback) {
    connection.query(query, params, function (err, results, fields) {
        if (err) {
            console.log("error in db runQuery-", err);
        }
        console.log("db runquery -", results);
        modelsCallback(err, results);
    });
}
module.exports.runQuery = runQuery;