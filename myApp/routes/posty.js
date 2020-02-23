const expr = require('express');
const router = expr.Router();

router.post('/:str', function(req, res) {
    const str = req.params['str'];
    const response = {'originalString': str, 'stringLength': str.length};
    res.send(response);
});

module.exports = router;