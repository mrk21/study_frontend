var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require("./components/app.js");
var Todo = require("./components/todo.js");
var Info = require("./components/info.js");

module.exports = (
  <Route handler={App} name="home" path="/">
    <Route name="info" handler={Info} />
    <DefaultRoute handler={Todo} />
  </Route>
);
