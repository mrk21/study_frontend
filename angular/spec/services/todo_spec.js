describe('services.Todo', function() {
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(Todo) {
    Todo.list = [];
  }));
  
  describe('#add(content)', function(){
    it('should add the content to this list', inject(function(Todo) {
      Todo.add('content');
      
      expect(Todo.list).toEqual([{
        id: 1,
        content: 'content',
        done: false
      }]);
    }));
  });
});
