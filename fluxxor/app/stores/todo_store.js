var Fluxxor = require("fluxxor");

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    this.todos = [];
    
    this.bindActions(
      "todo:add", this.onAddTodo,
      "todo:toggle", this.onToggleTodo,
      "todo:clear", this.onClearTodos
    );
  },
  
  onAddTodo: function(payload) {
    this.todos.push({text: payload.text, complete: false});
    this.emit("change");
  },
  
  onToggleTodo: function(payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit("change");
  },
  
  onClearTodos: function() {
    this.todos = this.todos.filter(function(todo) {
      return !todo.complete;
    });
    this.emit("change");
  },
  
  getState: function() {
    return {
      list: this.todos
    };
  }
});

module.exports = TodoStore;
