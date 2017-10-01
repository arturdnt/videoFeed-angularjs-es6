/**
 * By H.
 */

const express = require('express'),
      app = express(),
      { all, filter } = require('./contorllers/feedItems');

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/:resourceType', filter);
app.get('/', all);

app.listen( 8082,  () => console.log("listening on port 8082"));