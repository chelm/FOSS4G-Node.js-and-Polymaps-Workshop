var auth = require('./auth');

// TWITTER STREAMING 
var TwitterNode = require('twitter-node').TwitterNode;
var twit = new TwitterNode({ user: auth.user, password: auth.pass});
// twitter like custom headers...
twit.headers['User-Agent'] = 'foss4g.demo.tool';

// binding to some events  
twit.addListener('error', function (err) { console.log(err.message); });
twit.addListener('tweet', function (tweet) {
  console.log(tweet.text);
});

// start the tracking
twit.track(['bieber','gaga']);
twit.stream();
