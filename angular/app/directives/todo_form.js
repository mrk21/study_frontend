var angular = require('angular');
var app = require('app');
var Todo = require('services/todo');

module.exports = app.directive('todoForm', function(){
  return {
    templateUrl: 'app/views/todo_form.html',
    
    controller: function($scope, Todo){
      $scope.onClick = function(){
        Todo.add($scope.content);
        $scope.content = '';
      };
    }
  };
});
