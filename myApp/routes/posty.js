const expr = require('express');
const router = expr.Router();


router.post('/', function(req, res) {
    res.render('postIndexFile', {'originalString': req.body['str'], 'stringLength': req.body['str'].length});
});

module.exports = router;