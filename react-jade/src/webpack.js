var React = require('react');
var template = require('./template.jade');

var Foo = React.createClass({
  render: function(){
    return template.a();
  }
});

React.render(React.createElement(Foo, null), document.getElementById('app'));
