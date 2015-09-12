var angular = require('angular');
var app = require('app');

module.exports = app.factory('Todo', function($resource){
  var id = 0;
  
  var Model = $resource('/api/todos/:id', {id: '@id'}, {
    $all:    {method: 'GET', isArray: true},
    $create: {method: 'POST', params: {id: ''}},
    $remove: {method: 'DELETE'},
    $save:   {method: 'PUT'},
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
    remove: function(){
      return Model.$remove({id: this.id}).$promise;
    },
    save: function(){
      return Model.$save({
        id: this.id,
        content: this.content,
        done: this.done
      }).$promise;
    }
  });
  
  return Model;
});
