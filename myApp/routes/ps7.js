var express = require('express');
var router = express.Router();

const https = require('https')
const options = {
  hostname: 'www.boredapi.com',
  path: '/api/activity',
  method: 'GET'
}


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* GET home page. */
router.get('/:string', function(req, res, next) {
    // Following external GET request code taken from https://nodejs.dev/making-http-requests-with-nodejs


    // res.send('cors problem fixed:)');
    const req1 = https.request(options, resp => {
        console.log(`statusCode: ${resp.statusCode}`)
        
        resp.on('data', d => {
            // res.render('ps4Template', {title: 'Express', activity: JSON.parse(d.toString()).activity, results: d.toString()});
            d_obj = JSON.parse(d.toString());
            res.send({activity: d_obj.activity}) // d.toString()
            return;
        })
    })
    
    req1.on('error', error => {
        console.error(error)
    })
    
    req1.end()
});

module.exports = router;
