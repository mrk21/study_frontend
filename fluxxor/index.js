var React = require("react");
var Fluxxor = require("fluxxor");
var TodoStore = require("./store");
var Application = require('./component');

var actions = {
  addTodo: function(text) {
    this.dispatch("todo:add", {text: text});
  },
  
  toggleTodo: function(todo) {
    this.dispatch("todo:toggle", {todo: todo});
  },
  
  clearTodos: function() {
    this.dispatch("todo:clear");
  }
};

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

React.render(<Application flux={flux} />, document.getElementById("app"));
