var angular = require('angular');
var app = require('app');
var Todo = require('factories/todo');

module.exports = app.directive('todoItem', function(Todo){
  return {
    replace: false,
    templateUrl: 'app/views/todo_item.html',
    
    controller: function($scope){
      $scope.remove = function(){
        $scope.todo.remove()
          .then(function(){
            return Todo.all();
          })
          .then(function(todos){
            $scope.$parent.todos = todos;
          })
        ;
      }
    }
  };
});
