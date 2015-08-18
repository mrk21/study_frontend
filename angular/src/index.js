var angular = require('angular');

var TodoApp = angular.module('TodoApp', []);

TodoApp.factory('Todo', function(){
  return [];
});

TodoApp.controller('TodoCtrl', function($scope, Todo){
  $scope.todos = Todo;
  index = 0;
  $scope.add = function() {
    if (!$scope.message) return;
    Todo.push({id: index, message: $scope.message, done: false});
    $scope.message = "";
    index++;
  };
});
