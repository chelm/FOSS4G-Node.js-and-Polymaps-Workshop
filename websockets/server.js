
var EventEmitter = require('events').EventEmitter,
    puts = require('sys').puts;


// set up the Socket server
var io = require('socket.io').listen(5000);
io.sockets.on('connection', function(socket){
  console.log('new connection established');
})


// generates a random number (random lat/lons)
function randomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// again out ticket object
var Ticker = function( interval ){
  var self = this, 
  nextTick = function(){
    self.emit('tick', { properties: { tweet: 'hello foss4g'}, geometry: { type:'Point', coordinates: [randomNum(-180,180), randomNum(-90,90)] } });
    setTimeout(nextTick, interval);
  }

  nextTick();
};

// Extend from EventEmitter 'addListener' and 'emit' methods
Ticker.prototype = new EventEmitter;

// A ticker instance with an interval of 5 seconds
var ticktock = new Ticker( 500 );

// Bind an event handler to the 'tick' event
ticktock.addListener('tick', function( point ) {
  io.sockets.emit('tweet',point);
  console.log(point);
});
