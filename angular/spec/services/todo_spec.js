describe('services.Todo', function() {
  beforeEach(module('TodoApp'));
  
  var Todo;
  
  beforeEach(inject(function(_Todo_) {
    Todo = _Todo_;
    Todo.list = [];
  }));
  
  describe('#add(content)', function(){
    it('should add the content to this list', function(){
      Todo.add('content');
      
      expect(Todo.list).toEqual([{
        id: 1,
        content: 'content',
        done: false
      }]);
    });
  });
});
