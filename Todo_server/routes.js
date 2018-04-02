var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/getlist', controller.list.getlist);

router.post('/additem', controller.list.postitem);

router.post('/updateitem', controller.list.updateitem);

router.get('/searchitem', controller.list.searchitem);


module.exports = router;