// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  //parent is a table, so this is a table row.
  tagName: 'tr',

  //hardcoded string of two table cells to contain the song details (artist and songname)
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  //the initialize function is unnecessary here because of how the view was called in its parent view. backbone
  //takes care of many variable definitions for us.

  events: {
    'click': function() {
      this.model.play();
    }
  },

  // whenever you click a song row, it will play its model (the url associated with that song)
  // events: {
  //   'click':'play'
  // },

  // play: function(){
  //   this.model.play()
  // }

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
