var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){
  res.send('Send posts to /point')
});

app.get('/point',function(req,res){
  res.send('{msg:"Got the point!!"}');
  console.log(req.query);
});

app.listen(8888)

