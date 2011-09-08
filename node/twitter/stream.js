// TWITTER STREAMING 
var TwitterNode = require('twitter-node').TwitterNode;
var twit = new TwitterNode({ user: '', password: ''});
twit.headers['User-Agent'] = 'foss4g.demo.tool';
twit.addListener('error', function (err) { console.log(err.message); });
twit.addListener('tweet', function (tweet) {
  console.log(tweet.text);
});


twit.track(['bieber','gaga']);
twit.stream();
