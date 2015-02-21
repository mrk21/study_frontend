var document = require('./init_dom');
var App = require('../src/app');
var assert = require('power-assert');

describe('App', function(){
  describe('init()', function(){
    it('should set document.body', function(){
      App.init();
      assert(document.body.innerHTML === '<p>test</p>');
    });
  });
});
