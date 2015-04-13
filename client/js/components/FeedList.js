/** @jsx React.DOM */

var React = require('react');

var FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem key={item.id}
                       id={item.id}
                       title={item.title}
                       description={item.description}
                       votes={item.votes}
                       onVote={this.props.onVote} />;
    }.bind(this));

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

