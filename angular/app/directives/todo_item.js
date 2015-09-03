var angular = require('angular');
var app = require('app');

module.exports = app.directive('todoItem', function(){
  return {
    replace: false,
    templateUrl: 'app/views/todo_item.html',
    
    scope: {
      todo: '@'
    },
    
    link: function(scope, element, attrs){
      scope.todo = scope.$eval(attrs.todoItem);
    },
    
    controller: function($scope, Todo){
      $scope.remove = function(id){
        Todo.remove(id);
      }
    }
  };
});
