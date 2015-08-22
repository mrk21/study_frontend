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
});
