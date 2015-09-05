var angular = require('angular');
var app = require('app');

module.exports = app.factory('Todo', function($resource){
  var id = 0;
  
  var Model = $resource('/api/todos/:id', {}, {
    $all:    {method: 'GET', isArray: true},
    $create: {method: 'POST'},
    $remove: {method: 'DELETE'},
  });
  
  angular.extend(Model, {
    all: function(){
      return this.$all().$promise;
    },
    create: function(content){
      if (!content) return;
      
      var result = Model.$create({
        id: ++id,
        content: content,
        done: false
      });
      
      return result.$promise;
    }
  });
  
  angular.extend(Model.prototype, {
    remove: function(callback){
      return this.$remove({id: this.id}).$promise;
    }
  });
  
  return Model;
});
