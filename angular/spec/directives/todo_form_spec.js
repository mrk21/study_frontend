describe('directives.todoForm', function() {
  var $compile, $rootScope, template, Todo;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_, _Todo_) {
    template = window.__html__['app/views/todo_form.html'];
    $templateCache.put('app/views/todo_form.html', template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    Todo = _Todo_;
  }));
  
  describe('when the add button was clicked', function(){
    it('should add the todo list', function(){
      $rootScope.content = 'content';
      
      var element = angular.element('<div todo-form></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      element.find('button')[0].click();
      expect(Todo.list.length).toEqual(1);
    });
  });
});
