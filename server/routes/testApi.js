var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Reached backend");
    res.send("“API is working properly”");
});

router.post('/', function(req, res, next) {
    console.log(req);
    res.send("“API is working properly”");
});

module.exports = router;