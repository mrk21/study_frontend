var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1><Link to="home">www</Link></h1>
        <ul>
          <li><Link to="info">info</Link></li>
        </ul>
        <RouteHandler {...this.props} />
      </div>
    );
  }
});
