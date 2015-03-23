// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

  enqueue: function(song){
    //increment end
    //add song at new end index
  },

  dequeue: function(song){
    //increment start
    //delete previous start
  },

  playFirst: function(){
    // set SongQueue[0] to currentSong 
  },

  playNext: function(){

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