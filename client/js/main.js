/** @jsx React.DOM */

var React = require('react');

var Feed = require('./components/Feed');

var testComponent = React.render(
  <Feed />,
  document.getElementById('app')
);

