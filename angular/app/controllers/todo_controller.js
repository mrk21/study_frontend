var angular = require('angular');
var app = require('app');
var Todo = require('services/todo');

module.exports = app.controller('TodoController', function($scope, Todo){
  $scope.todos = Todo.list;
});
