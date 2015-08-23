var angular = require('angular');
var app = require('app');
var Todo = require('services/todo');

module.exports = app.controller('TodoController', function($scope, $http, Todo){
  $http.get('./data/todos.json').success(function(response){
    Todo.list = response;
    $scope.todos = response;
  });
});
