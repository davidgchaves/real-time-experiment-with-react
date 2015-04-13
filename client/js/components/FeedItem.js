/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({

  vote: function(newVotes) {
    this.props.onVote({
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      votes: newVotes
    });
  },

  voteUp: function() {
    var oldVotes = parseInt(this.props.votes, 10);
    var newVotes = oldVotes + 1;
    this.vote(newVotes);
  },

  voteDown: function() {
    var oldVotes = parseInt(this.props.votes, 10);
    var newVotes = oldVotes - 1;
    this.vote(newVotes);
  },

  render: function() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success">{this.props.votes}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.description}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
          <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
        </span>
      </li>
    );
  }

});

module.exports = FeedItem;

