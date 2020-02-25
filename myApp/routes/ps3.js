const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Successfully mounted ps3Router onto /ps3');
});

module.exports = router;