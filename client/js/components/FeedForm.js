/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({

  handleForm: function(event) {
    event.preventDefault();

    var newItem = {
      id: this.props.generateMockIdForItem(),
      title: React.findDOMNode(this.refs.title).value,
      description: React.findDOMNode(this.refs.description).value,
      votes: 0
    };

    React.findDOMNode(this.refs.feedForm).reset();
    this.props.onNewItem(newItem);
  },

  render: function() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles = { display: display };

    return (
      <form ref="feedForm" style={styles} id="feed-form" className="container" onSubmit={this.handleForm}>
        <div className="form-group">
          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ref="description" type="text" className="form-control" placeholder="Description" />
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    );
  }

});

module.exports = FeedForm;

