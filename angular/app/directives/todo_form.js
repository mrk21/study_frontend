var angular = require('angular');
var app = require('app');
var Todo = require('factories/todo');

module.exports = app.directive('todoForm', function(){
  return {
    templateUrl: 'app/views/todo_form.html',
    
    controller: function($scope, Todo){
      $scope.onClick = function(){
        Todo.create($scope.content)
          .then(function(created){
            $scope.content = '';
            return Todo.all();
          })
          .then(function(todos){
            $scope.todos = todos;
          })
        ;
      };
    }
  };
});
