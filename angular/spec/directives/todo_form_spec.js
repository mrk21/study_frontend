describe('directives.todoForm', function() {
  var helper;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(function(){
    helper = new DirectiveTestHelper();
    helper.setTemplate('app/views/todo_form.html');
  });
  
  describe('when the add button was clicked', function(){
    it('should call `$scope.onAdd()`', function(){
      helper.rootScope.onAdd = function(){};
      
      helper.httpBackend.expectPOST('/api/todos').respond(200, JSON.stringify({
        id: 1,
        content: helper.rootScope.content,
        done: false
      }));
      spyOn(helper.rootScope, 'onAdd');
      
      helper.build('<div todo-form todo-item-added="onAdd"></div>');
      helper.scope.content = 'content';
      helper.element.find('button')[0].click();
      helper.httpBackend.flush();
      
      expect(helper.rootScope.onAdd).toHaveBeenCalled();
    });
  });
});
