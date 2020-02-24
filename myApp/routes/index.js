var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {ret: `'I don't get Express' layout.'`});
});


module.exports = router;
