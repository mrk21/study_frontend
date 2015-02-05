var React = require('react');
var Hello = require('./component');
require('react/addons');
require('react-test-utils');

alert(
  React.addons.TestUtils.findAllInRenderedTree(
    React.addons.TestUtils.renderIntoDocument(React.createElement(Hello)),
    function(component) { return component.tagName === "DIV" }
  ).map(function(component){ return component.getDOMNode().textContent })
);
