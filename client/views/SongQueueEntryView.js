// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button class="dequeue">Dequeue</button></td>'),

  events: {
    'click .dequeue': 'dequeue'
    }
  },

  dequeue: function(e){
    e.preventDefault();
    this.collection.dequeue(this.model)
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
