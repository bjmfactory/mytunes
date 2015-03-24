// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function(){
    this.render();
    this.$el.on('ended', (function(){
      this.model.ended();
    }).bind(this)) ;
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  //if there is a model, get its url. otherwise use an empty string.
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
