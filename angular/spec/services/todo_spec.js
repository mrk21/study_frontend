describe('services.Todo', function() {
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(Todo) {
    Todo.list = [];
  }));
  
  it('should be uppercase', inject(function(Todo) {
    Todo.add('content');
    
    expect(Todo.list).toEqual([{
      id: 1,
      content: 'content',
      done: false
    }]);
  }));
});
