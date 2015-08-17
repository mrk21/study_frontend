var angular = require('angular');

var TodoApp = angular.module('TodoApp', []);

TodoApp.controller('TodoCtrl', function ($scope) {
  $scope.todos = [];
  index = 0;
  $scope.add = function() {
    if (!$scope.message) return;
    $scope.todos.push({id: index, message: $scope.message, done: false});
    $scope.message = "";
    index++;
  };
});
