var angular = require('angular');
var app = require('app');
var Todo = require('factories/todo');

module.exports = app.directive('todoForm', function(){
  return {
    templateUrl: 'app/views/todo_form.html',
    
    scope: {
      todoItemAdded: '='
    },
    
    controller: function($scope, Todo){
      $scope.add = function(){
        Todo.create($scope.content)
          .then(function(created){
            $scope.content = '';
            $scope.todoItemAdded();
          })
        ;
      };
    }
  };
});
