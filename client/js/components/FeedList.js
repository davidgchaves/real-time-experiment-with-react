/** @jsx React.DOM */

var React = require('react');

var FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.id}
                       title={item.title}
                       description={item.description}
                       votes={item.votes} />;
    });

    return (
      <div className="container">
        <ul className="list-group">
          {feedItems}
        </ul>
      </div>
    );
  }

});

module.exports = FeedList;

