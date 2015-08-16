var angular = require('angular');

var app = angular.module("testApp", []);

app.controller('testAppController1', function(){
  this.message = "First App 1";

  this.hello = function(string) {
    alert('Hello ' + string);
  };
  
});
