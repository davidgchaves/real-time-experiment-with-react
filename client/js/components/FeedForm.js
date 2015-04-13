/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({

  handleForm: function(event) {
    event.preventDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
      votes: 0
    };

    this.refs.feedForm.getDOMNode().reset();
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

