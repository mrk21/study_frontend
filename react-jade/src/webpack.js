var React = require('react');
var template = require('./template.jade');

var Foo = React.createClass({
  render: function(){
    return template.a();
  }
});

React.render(React.createElement(Foo, null), document.getElementById('app'));

alert(React.renderToString(React.jade(/*
  div
    each val in [1,2,3]
      li(key=val)= val
    Foo
*/)({Foo: Foo})));
