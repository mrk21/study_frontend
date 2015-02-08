var React = require('react');

module.exports = React.createClass({
  render: function(){
    return React.DOM.div({}, [
      React.DOM.a({onClick: this.onClick, ref: 'link', key: 1}, 'to home')
    ]);
  },
  onClick: function(e) {
    console.log(1);
  }
});
