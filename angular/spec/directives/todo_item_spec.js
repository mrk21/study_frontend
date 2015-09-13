describe('directives.todoItem', function() {
  var $compile, $rootScope, template, Todo, $httpBackend;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_, _Todo_, _$httpBackend_) {
    template = window.__html__['app/views/todo_item.html'];
    $templateCache.put('app/views/todo_item.html', template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    Todo = _Todo_;
    $httpBackend = _$httpBackend_;
  }));
  
  describe('when the remove button was clicked', function(){
    it('should call `$scope.onRemove()`', function(){
      $rootScope.onRemove = function(){};
      $rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      $httpBackend.expectDELETE('/api/todos/1').respond(200, JSON.stringify($rootScope.todo));
      spyOn($rootScope, 'onRemove');
      
      var element = angular.element('<div todo-item="todo" todo-item-removed="onRemove"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      element.find('button')[0].click();
      $httpBackend.flush();
      
      expect($rootScope.onRemove).toHaveBeenCalled();
    });
    
    it('should call `$scope.onUpdate()`', function(){
      $rootScope.onUpdate = function(){};
      $rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      $httpBackend.expectPUT('/api/todos/1').respond(200, JSON.stringify($rootScope.todo));
      spyOn($rootScope, 'onUpdate');
      
      var element = angular.element('<div todo-item="todo" todo-item-updated="onUpdate"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      element.find('input')[0].click();
      $httpBackend.flush();
      
      expect($rootScope.onUpdate).toHaveBeenCalled();
    });
  });
});
