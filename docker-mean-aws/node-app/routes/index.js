var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost:27017/my_database');
  MyModel.findOne(function(error, result) { 
    res.render('index', { title: result.text });
  });
});

module.exports = router;
