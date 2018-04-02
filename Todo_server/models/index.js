var db = require('../db');

module.exports = {
    list: {
        get: function (controllercb) {
            var getrequiredfields = function (err, results) {
                var resObjArray = results.map(function(row) {
                    return {id: row.id, task: row.task, status:row.status};
                });
                console.log("inside models get list -", resObjArray);
                controllercb(err, resObjArray);
            }
            var getlistQuery = `select * from lists`
            db.runQuery(getlistQuery, null, getrequiredfields);
        },
        post: function (params, controllercb) {
            var postlistQuery = `insert into lists (task, status) values (?, ?)`
            db.runQuery(postlistQuery, params, function (err, results) {
                console.log("models post item - ", results)
                controllercb(err, results);
            });
        }, // a function which can be used to insert a message into the database

        update: function (params, callback) {
            var updateQuery = `update lists set status = ? where id = ?`;
            console.log("models params update request,", params );
            db.runQuery(updateQuery, params, function (err, results) {
                console.log("models update item - ", results)
                callback(err, results);
            });
        },

        search: function (params, callback) {
            // Ditto as above.
            var searchQuery = `select * from lists where task like ?`;
            db.runQuery(searchQuery, params, function (err, results) {
                console.log("models search results-", results);

                var resObjArray = results.map(function(row) {
                    return {id: row.id, task: row.task, status:row.status};
                });
                console.log("inside models search list -", resObjArray);

                callback(err, resObjArray);
            });
        }
    }
};