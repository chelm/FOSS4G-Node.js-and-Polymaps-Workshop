var EventEmitter = require('events').EventEmitter,
    puts = require('sys').puts;


// generates a random number (random lat/lons)
function randomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// again out ticket object
var Ticker = function( interval ){
  var self = this, 
  nextTick = function(){
    self.emit('tick', {geometry:{type:'Point',coordinates:[randomNum(-180,180), randomNum(-90,90)]}});
    setTimeout(nextTick, interval);
  }

  nextTick();
};

// Extend from EventEmitter 'addListener' and 'emit' methods
Ticker.prototype = new EventEmitter;

// A ticker instance with an interval of 5 seconds
var ticktock = new Ticker( 1000 );

// Bind an event handler to the 'tick' event
ticktock.addListener('tick', function( point ) {
  console.log(point);
});
