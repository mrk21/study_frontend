describe('directives.todoForm', function() {
  var $compile, $rootScope, template, Todo, $httpBackend;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_, _Todo_, _$httpBackend_) {
    template = window.__html__['app/views/todo_form.html'];
    $templateCache.put('app/views/todo_form.html', template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    Todo = _Todo_;
    $httpBackend = _$httpBackend_;
  }));
  
  describe('when the add button was clicked', function(){
    it('should call `$scope.onAdd()`', function(){
      $rootScope.onAdd = function(){};
      
      $httpBackend.expectPOST('/api/todos').respond(200, JSON.stringify({
        id: 1,
        content: $rootScope.content,
        done: false
      }));
      spyOn($rootScope, 'onAdd');
      
      var element = angular.element('<div todo-form todo-item-added="onAdd"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      scope = $rootScope.$$childHead;
      
      scope.content = 'content';
      element.find('button')[0].click();
      $httpBackend.flush();
      
      expect($rootScope.onAdd).toHaveBeenCalled();
    });
  });
});
