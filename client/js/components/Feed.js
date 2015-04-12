/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = require('./ShowAddButton'),
    FeedForm      = require('./FeedForm'),
    FeedList      = require('./FeedList');

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      { key:'1', title: "Bergman's Persona", description: 'A young nurse, Alma, is put in charge of Elisabeth Vogler.', votes: 1966 },
      { key:'2', title: "Kurosawa's Rashomon", description: 'A heinous crime and its aftermath are recalled from differing points of view.', votes: 1950 },
      { key:'3', title: "Ozu's Bashun", description: 'Setsuko Hara and Jun Usami ride bicycles to the beach... and the vase, of course.', votes: 1949 },
    ];
    return { items: FEED_ITEMS };
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton />
        </div>

        <FeedForm />

        <br />
        <br />

        <FeedList items={this.state.items} />
      </div>
    );
  }

});

module.exports = Feed;

