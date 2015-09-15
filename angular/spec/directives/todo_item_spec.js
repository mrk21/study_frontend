describe('directives.todoItem', function() {
  var helper;
  var Todo;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(_Todo_) {
    helper = new DirectiveTestHelper();
    helper.setTemplate('app/views/todo_item.html');
    Todo = _Todo_;
  }));
  
  describe('when the remove button was clicked', function(){
    it('should call `$scope.onRemove()`', function(){
      helper.rootScope.onRemove = function(){};
      helper.rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      helper.httpBackend.expectDELETE('/api/todos/1').respond(200, JSON.stringify(helper.rootScope.todo));
      spyOn(helper.rootScope, 'onRemove');
      
      helper.build('<div todo-item="todo" todo-item-removed="onRemove"></div>');
      helper.element.find('button')[0].click();
      helper.httpBackend.flush();
      
      expect(helper.rootScope.onRemove).toHaveBeenCalled();
    });
  });
  
  describe('when the checkbox was clicked', function(){
    it('should call `$scope.onUpdate()`', function(){
      helper.rootScope.onUpdate = function(){};
      helper.rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      helper.httpBackend.expectPUT('/api/todos/1').respond(200, JSON.stringify(helper.rootScope.todo));
      spyOn(helper.rootScope, 'onUpdate');
      
      helper.build('<div todo-item="todo" todo-item-updated="onUpdate"></div>');
      helper.element.find('input')[0].click();
      helper.httpBackend.flush();
      
      expect(helper.rootScope.onUpdate).toHaveBeenCalled();
    });
  });
});
