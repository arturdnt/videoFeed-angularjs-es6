/**
 * By H.
 */

const express = require('express'),
      app = express(),
      mock = require('./mock');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/:resourceType', function (req, res) {
        let filter = req.params.resourceType.toLowerCase();
        res.send(filter !== 'all' ? mock.filter(item=>(item.source === filter)):mock);
});
app.get('/', function (req, res) {
    res.send(mock);
});

app.listen(8082, function () {
    console.log("listening on port 8082");
});