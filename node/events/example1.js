var puts = require('sys').puts,
    events = require('events');

my_emitter = new events.EventEmitter();

setTimeout(function(){
    my_emitter.emit('random', Math.random(1000));
  }, 3000);

my_emitter.addListener('random', function( number ) {
  puts('number emitted: '+ number);
});
