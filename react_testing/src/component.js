var React = require('react');

module.exports = React.createClass({
  render: function(){
    return React.jsx(`
      <div>
        <a onClick={this.onClick} ref="link" key="1" href="">to home</a>
      </div>
    `);
  },
  onClick: function(e) {
    console.log(1);
  }
});
