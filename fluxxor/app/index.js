var React = require("react");
var Fluxxor = require("fluxxor");
var Router = require("react-router");

var flux = new Fluxxor.Flux(
  require('./stores'),
  require('./actions')
);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

Router.run(require('./routes'), function(Handler) {
  React.render(<Handler flux={flux} />, document.getElementById("app"));
});
