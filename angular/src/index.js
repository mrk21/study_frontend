var angular = require('angular');

var TodoApp = angular.module('TodoApp', []);

TodoApp.factory('Todo', function(){
  return [];
});


// Aungular's directive is like Web Components.
TodoApp.directive('todoForm', function(){
  return {
    templateUrl: 'src/todo_form.html',
    
    controller: function($scope, Todo){
      index = 0;
      
      $scope.add = function(){
        if (!$scope.message) return;
        Todo.push({id: index, message: $scope.message, done: false});
        $scope.message = "";
        index++;
      };
    }
  };
});

TodoApp.controller('TodoCtrl', function($scope, Todo){
  $scope.todos = Todo;
});
