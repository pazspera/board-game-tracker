var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/zeus', function(req, res, next) {
  res.render('index', { title: 'Zeus' });
});

module.exports = router;
