var React = require('react');
var jade = require('react-jade');
var template = jade.compileFile('src/template.jade');

var Foo = React.createClass({
  render: function(){
    return template();
  }
});

React.render(React.createElement(Foo, null), document.getElementById('app'));
