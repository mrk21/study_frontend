describe('factories.Todo', function(){
  var $httpBackend, Todo;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(_$httpBackend_, _Todo_) {
    $httpBackend = _$httpBackend_;
    Todo = _Todo_;
  }));
  
  describe('#add(content)', function(){
    it('should be promise', function(){
      expect(Todo.create('a').then.constructor).toEqual(Function);
    });
    
    describe('when the content was blank', function(){
      it('should be undefined', function(){
        expect(Todo.create('')).toEqual(undefined);
      });
    });
  });
});
