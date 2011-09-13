// Sockets
var io = require('socket.io').listen(5000);
io.sockets.on('connection', function(socket){
  console.log('new connection established');
})

var auth = require('./auth');

// TWITTER STREAMING 
var TwitterNode = require('twitter-node').TwitterNode;
var twit = new TwitterNode({ user: auth.user, password: auth.pass});
twit.headers['User-Agent'] = 'foss4g.demo.tool';
twit.addListener('error', function (err) { console.log(err.message); });
twit.addListener('tweet', function (tweet) {
  console.log(tweet.text);
  var lat = Math.floor(Math.random() * (90 - -90 + 1)) + -90;
  var lon = Math.floor(Math.random() * (180 - -180 + 1)) + -180;
  var obj = {'properties':tweet, 'geometry':{'type':'Point','coordinates':[lon, lat]}}
  io.sockets.emit('tweet', obj);
});

twit.track(['gaga','foss4g']);
twit.stream();
