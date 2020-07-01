var express = require('express');
var router = express.Router();
var Photos = require('../model/uploadImage'); // get modelvar router = express.Router();

router.post('/', function(req, res, next) {
    Photos.insertMany({
        baseUrl:req.body.baseUrl
    })
    .then(
    res.status(200).send('Photo Uploaded Sucessfully'))
    .catch(res.status(500).send('Photo failed to upload'))
});

module.exports = router;
