const expr = require('express');
const router = expr.Router();

router.post('/', function(req, res) {
    res.send('POST Request Made');
});

module.exports = router;