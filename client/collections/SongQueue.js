// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
  },

  enqueue: function(song){
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song){
    if (this.SongQueue(0) === song){
      this.playNext();
    } else {
      this.remove()
    }
  },

  playFirst: function(){
    this.at(0).play(); 
  },

  playNext: function(){
    this.shift();
    if ( this.length ){ this.playFirst(); }
  }

});

/*

for backbone, start with the views
what are you listening for? 
And what methods do you call when you hear those events?
Add that to the model

In SongQueue
methods: initialize, enqueue, dequeue, playNextSong

In SongQueueView
listen for a click on the add to queue button -> call enqueue
listen for the end of the track -> call playNextSong (and dequeue?)


*/