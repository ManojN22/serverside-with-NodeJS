var express = require('express');
var router = express.Router();
//const cors = require('./cors');


/* GET home page. */

router.get('/', function(req, res, next) {
  

  res.render('index', { title: 'Express' });
 //const tf = require("@tensorflow/tfjs");
 
});

module.exports = router;
