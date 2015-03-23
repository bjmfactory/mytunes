// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  setSong: function(song){
    //set the instance model to the song in question
    this.model = song;
    //render the view now that you've set the model
    this.render();
  },

  //if there is a model, get its url. otherwise use an empty string.
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
