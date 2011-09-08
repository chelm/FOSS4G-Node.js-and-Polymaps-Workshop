var express = require('express');

var app = express.createServer();

app.get('/',function(req,res){
  res.render('index.jade',{
    locals:{
      title:'Foss4G Demo'
    }
  });
});


app.get('/new', function(req, res){
  console.log(req.query)
  res.redirect('back');
});

app.listen(8000);
