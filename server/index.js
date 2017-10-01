/**
 * By H.
 */

const express = require('express'),
      app = express(),
      feedItems = require('./feedItems');

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/:resourceType', feedItems.filter);
app.get('/', feedItems.all);

app.listen(8082, function () {
    console.log("listening on port 8082");
});