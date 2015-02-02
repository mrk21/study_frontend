module.exports = {
  todo: {
    add: function(text) {
      this.dispatch("todo:add", {text: text});
    },
    
    toggle: function(todo) {
      this.dispatch("todo:toggle", {todo: todo});
    },
    
    clear: function() {
      this.dispatch("todo:clear");
    }
  }
};
