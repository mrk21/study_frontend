var angular = require('angular');
var app = require('app');

module.exports = app.factory('Todo', function($resource){
  var id = 0;
  
  var Model = $resource('/api/todos/:id', {}, {
    all:    {method: 'GET', isArray: true},
    save:   {method: 'POST'},
    remove: {method: 'DELETE'},
  });
  
  angular.extend(Model, {
    create: function(content, callback){
      if (!content) return;
      
      var record = new Model({
        id: ++id,
        content: content,
        done: false
      });
      
      return record.$save(callback);
    }
  });
  
  angular.extend(Model.prototype, {
    remove: function(callback){
      return this.$remove({id: this.id}, callback);
    }
  });
  
  return Model;
});
