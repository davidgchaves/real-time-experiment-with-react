/** @jsx React.DOM */

var React = require('react');

var FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem title={item.title} description={item.description} votes={item.votes} />;
    });

    return (
      <ul className="list-group container">
        {feedItems}
      </ul>
    );
  }

});

module.exports = FeedList;

