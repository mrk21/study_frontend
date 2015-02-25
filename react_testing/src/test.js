var React = require('react');
var Hello = require('./component');
require('react/addons');
require('react-test-utils');

require('./init_dom');

var node = React.addons.TestUtils.renderIntoDocument(React.createElement(Hello));

console.log(
  React.addons.TestUtils.findAllInRenderedTree(
    node,
    function(component) { return component.tagName === "DIV" }
  ).map(function(component){ return component.getDOMNode().textContent })
);

React.addons.TestUtils.Simulate.click(node.refs.link);
React.addons.TestUtils.Simulate.mouseOver(node.refs.link);
