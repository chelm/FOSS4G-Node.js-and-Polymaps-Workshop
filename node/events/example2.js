var EventEmitter = require('events').EventEmitter,
    puts = require('sys').puts;


// create a new object with a nextTieck function
var Ticker = function( interval ){
  var self = this, 
  nextTick = function(){
    self.emit('tick', Math.random(1000));
    setTimeout(nextTick, interval);
  }

  nextTick();
};

// Extend from EventEmitter 'addListener' and 'emit' methods
Ticker.prototype = new EventEmitter;

// A ticker instance with an interval of 1 second
var ticktock = new Ticker( 1000 );

// Bind an event handler to the 'tick' event
ticktock.addListener('tick', function( number ) {
  puts('number emitted: '+ number);
});
