var React = require("react");
var Fluxxor = require("fluxxor");
var Application = require('./components/application');

var flux = new Fluxxor.Flux(
  require('./stores'),
  require('./actions')
);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<Application flux={flux} />, document.getElementById("app"));
