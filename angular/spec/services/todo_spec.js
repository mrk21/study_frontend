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
  
  describe('#remove(id)', function(){
    beforeEach(function(){
      Todo.list = [
        {
          id: 2,
          content: 'content 2',
          done: false
        },
        {
          id: 4,
          content: 'content 4',
          done: false
        }
      ];
    });
    
    it('should remove the item whose id is the `id`', function(){
      Todo.remove(2);
      
      expect(Todo.list).toEqual([
        {
          id: 4,
          content: 'content 4',
          done: false
        }
      ]);
    });
  });
});
