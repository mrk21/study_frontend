var angular = require('angular');
var app = require('app');

module.exports = app.service('Todo', function(){
  this.list = [];
  
  this.add = function(content){
    if (!content) return;
    
    this.list.push({
      id: this.list.length + 1,
      content: content,
      done: false
    });
  };
  
  this.remove = function(id){
    for (var i=0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        this.list.splice(i,1);
        return;
      }
    }
  }
});
