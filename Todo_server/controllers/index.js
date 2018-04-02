var models = require('../models');

module.exports = {
    list : {
        getlist : function(req, res) {
            models.list.get(function (err, results) {
                if (err) {
                    res.sendStatus(400);
                }
                console.log("inside controllers get list -", results);
                res.json(results);   // will also convert non-objects (null, undefined) to json objects
            });
        },
        postitem : function(req, res) {
            console.log("controller post item body-", req.body)
            var data = [req.body.task, req.body.status];
            models.list.post(data, function (err, results) {
                if (err) {
                    console.log("err in controllers");
                    res.sendStatus(401);
                }
                //write to res body
                res.sendStatus(201);
            });
        },
        updateitem : function(req, res) {
            //get the data for req.id 
            //change the current status to req.status 
            console.log("controller updateitem req-", req.body);
            var data = [req.body.status, req.body.id];
            models.list.update(data, function(err, results) {
                console.log("controller updateitem res-", results);
                if (err) {
                    res.sendStatus(401);
                }
                res.sendStatus(201);
            });
        },
        searchitem : function(req, res) {
            console.log("controller searchitem req-", req.query);
            var search = req.query.search;

            if (search === undefined || search === null || typeof search !== 'string') {
                res.sendStatus(400);
            }
            search = '%' + search + '%'
            var params = [search];
            models.list.search(params, function (err, results) {
                if (err) {
                    res.sendStatus(400) 
                }
                res.json(results); 
            });
        },
    }
}