var angular = require('angular');
var app = require('app');
var Todo = require('factories/todo');

module.exports = app.controller('TodoController', function($scope, Todo){
  Todo.all().then(function(todos){
    $scope.todos = todos;
  });
});
