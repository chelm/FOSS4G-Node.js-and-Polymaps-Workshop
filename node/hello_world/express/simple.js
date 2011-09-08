var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World via Express');
});

app.get('/new', function(req, res){
    console.log(req.query)
    res.redirect('back');
});

app.listen(8000);
