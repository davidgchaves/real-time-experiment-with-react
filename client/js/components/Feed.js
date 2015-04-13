/** @jsx React.DOM */

var React = require('react'),
    _     = require('lodash');

var ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList');

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      { id:'0', title: "Bergman's Persona", description: 'A young nurse, Alma, is put in charge of Elisabeth Vogler.', votes: 1966 },
      { id:'1', title: "Kurosawa's Rashomon", description: 'A heinous crime and its aftermath are recalled from differing points of view.', votes: 1950 },
      { id:'2', title: "Ozu's Bashun", description: 'Setsuko Hara and Jun Usami ride bicycles to the beach... and the vase, of course.', votes: 1949 },
    ];
    return {
      items: FEED_ITEMS,
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
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false
    });
  },

  onVote: function(item) {
    var items = _.uniq(this.state.items);
    var indexItemToUpdate = _.findIndex(items, function(feedItem) { return feedItem.id === item.id; });
    var oldItem = items[indexItemToUpdate];

    var newItems = _.pull(items, oldItem);
    newItems.push(item);

    this.setState({ items: newItems });
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

