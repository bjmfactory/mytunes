// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //renders as soon as you create it
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    //every backbone view has a default el. In this case, it's a table, not a div
    //removes the table elements
    this.$el.children().detach();

    //sets the table header to library
    this.$el.html('<th>Library</th>').append(
      //for each song in the library, map a function that calls a library entry view
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
