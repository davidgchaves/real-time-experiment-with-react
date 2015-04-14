/** @jsx React.DOM */

var React    = require('react'),
    _        = require('lodash'),
    Firebase = require('firebase');

var ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList');

var Feed = React.createClass({

  loadFirebaseData: function() {
    var firebaseFeed = new Firebase('https://gsr-demo.firebaseio-demo.com/feed');

    firebaseFeed.on('value', function(snapshot) {
      var items = [];
      var sortedItems = [];

      snapshot.forEach(function(itemSnapshot) {
        var item = itemSnapshot.val();
        item.id = itemSnapshot.key();
        items.push(item);
      });

      sortedItems = this.sortByVotes(items);
      this.setState({ items: sortedItems });
    }.bind(this));
  },

  componentDidMount: function() {
    this.loadFirebaseData();
  },

  getInitialState: function() {
    return {
      items: [],
      formDisplayed: false
    };
  },

  onToggleForm: function() {
    this.setState({ formDisplayed: !this.state.formDisplayed });
  },

  generateMockIdForItem: function() {
    return this.state.items.length;
  },

  onNewItem: function(newItem) {
    var firebaseFeed = new Firebase('https://gsr-demo.firebaseio-demo.com/feed');
    firebaseFeed.push(newItem);
  },

  sortByVotes: function(items) {
    return _.sortBy(items, function(item) { return -item.votes; });
  },

  onVote: function(item) {
    var firebaseFeed = new Firebase('https://gsr-demo.firebaseio-demo.com/feed').child(item.id);
    firebaseFeed.update(item);
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} generateMockIdForItem={this.generateMockIdForItem} />

        <br />
        <br />

        <FeedList items={this.state.items} onVote={this.onVote} />
      </div>
    );
  }

});

module.exports = Feed;

