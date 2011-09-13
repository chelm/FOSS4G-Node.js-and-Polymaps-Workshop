var auth = require('./auth.js');

var TwitterNode = require('twitter-node').TwitterNode,
    EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.addListener('tweet', function(tweet){
  var lat = Math.floor(Math.random() * (90 - -90 + 1)) + -90, 
      lon = Math.floor(Math.random() * (180 - -180 + 1)) + -180;
  console.log({text:tweet.text, lat:lat, lon:lon})
})

var twit = new TwitterNode({ user: auth.user, password: auth.pass});

twit.headers['User-Agent'] = 'foss4g.demo.tool';

twit.addListener('error', function (err) { console.log(err.message); });

twit.addListener('tweet', function (tweet) {
  emitter.emit('tweet',tweet)
});

twit.track(['bieber','gaga']);

twit.stream();
