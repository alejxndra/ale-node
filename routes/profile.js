var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title:'profile'
    name:'alejandra'
    age:15
    position:'student'
    hobbies:['volleyball', 'drawing', 'eat']
  }
  res.render('profile',{ title: 'express'})
});

module.exports = router;
