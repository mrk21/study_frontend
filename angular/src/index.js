var angular = require('angular');

var TodoApp = angular.module('TodoApp', []);

// Todo model
TodoApp.service('Todo', function(){
  this.list = [];
  
  this.add = function(message){
    if (!message) return;
    
    this.list.push({
      id: this.list.length + 1,
      message: message,
      done: false
    });
  };
});

// Aungular's directive is like Web Components.
TodoApp.directive('todoForm', function(){
  return {
    templateUrl: 'src/todo_form.html',
    
    controller: function($scope, Todo){
      $scope.onClick = function(){
        Todo.add($scope.message);
        $scope.message = '';
      };
    }
  };
});

TodoApp.controller('TodoCtrl', function($scope, Todo){
  $scope.todos = Todo.list;
});
