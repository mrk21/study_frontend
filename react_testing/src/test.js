var React = require('react');
var Hello = require('./component');
var jsdom = require('jsdom').jsdom;
require('react/addons');
require('react-test-utils');

global.document = jsdom('<html><body></body></html>');
global.window = document.parentWindow;
global.navigator = window.navigator;

var node = React.addons.TestUtils.renderIntoDocument(React.createElement(Hello));

console.log(
  React.addons.TestUtils.findAllInRenderedTree(
    node,
    function(component) { return component.tagName === "DIV" }
  ).map(function(component){ return component.getDOMNode().textContent })
);

React.addons.TestUtils.Simulate.click(node.refs.link);
React.addons.TestUtils.Simulate.mouseOver(node.refs.link);
