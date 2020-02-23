const expr = require('express');
const router = expr.Router();


router.post('/', function(req, res) {
    const str = req.body['str'];
    const response = {'originalString': str, 'stringLength': str.length};
    res.render('postIndexFile', response);
    // res.send('meowmix is cool');
});

module.exports = router;