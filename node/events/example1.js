var puts = require('sys').puts,
    events = require('events');

// a new "emitter"
my_emitter = new events.EventEmitter();

// create a timeout to emit and event after a few seconds 
setTimeout(function(){
    my_emitter.emit('random', Math.random(1000));
  }, 3000);

// and bind to the random event!!
my_emitter.addListener('random', function( number ) {
  puts('number emitted: '+ number);
});
