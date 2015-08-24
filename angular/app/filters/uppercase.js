var angular = require('angular');
var app = require('app');

module.export = app.filter('uppercase', function(){
  return function(input){
    return (input||'').toString().toUpperCase();
  };
});
