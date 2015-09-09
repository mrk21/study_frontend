describe('directives.todoForm', function() {
  var $compile, $rootScope, template, Todo, $q;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_, _Todo_, _$q_) {
    template = window.__html__['app/views/todo_form.html'];
    $templateCache.put('app/views/todo_form.html', template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    Todo = _Todo_;
    $q = _$q_;
  }));
  
  describe('when the add button was clicked', function(){
    var deferred;
    
    beforeEach(function(){
      deferred = $q.defer();
      setTimeout(function(){
        deferred.resolve({});
      }, 0);
    });
    
    it('should call `Todo.create()` and `$scope.onAdd()`', function(done){
      $rootScope.content = 'content';
      $rootScope.onAdd = function(){};
      
      spyOn($rootScope, 'onAdd');
      spyOn(Todo, 'create').and.callFake(function(){
        return deferred.promise;
      });
      
      var element = angular.element('<div todo-form todo-item-added="onAdd"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      setTimeout(function(){
        element.find('button')[0].click();
        expect(Todo.create).toHaveBeenCalled();
        expect($rootScope.onAdd).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
