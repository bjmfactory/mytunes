// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() { 
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      //for each song in the library, map a function that calls a library entry view
      // this.collection.
        return new SongQueueEntryView({model: song}).render()
      })
    );
  }

});
