var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let ret_json = {ret: `'I don't get Express' layout.'`, val: 'meow'};
  // res.send(ret_json);
  res.render('index', ret_json);
});


module.exports = router;
