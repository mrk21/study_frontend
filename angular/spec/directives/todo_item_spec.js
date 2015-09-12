describe('directives.todoItem', function() {
  var $compile, $rootScope, template, Todo, $q;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_, _Todo_, _$q_) {
    template = window.__html__['app/views/todo_item.html'];
    $templateCache.put('app/views/todo_item.html', template);
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    Todo = _Todo_;
    $q = _$q_;
  }));
  
  describe('when the remove button was clicked', function(){
    var deferred;
    
    beforeEach(function(){
      deferred = $q.defer();
      setTimeout(function(){
        deferred.resolve({});
      }, 0);
    });
    
    it('should call `Todo#remove()` and `$scope.onRemove()`', function(done){
      $rootScope.onRemove = function(){};
      $rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      spyOn($rootScope, 'onRemove');
      spyOn($rootScope.todo, 'remove').and.callFake(function(){
        return deferred.promise;
      });
      
      var element = angular.element('<div todo-item="todo" todo-item-removed="onRemove"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      setTimeout(function(){
        element.find('button')[0].click();
        expect($rootScope.todo.remove).toHaveBeenCalled();
        expect($rootScope.onRemove).toHaveBeenCalled();
        done();
      }, 0);
    });
    
    it('should call `Todo#save()` and `$scope.onUpdate()`', function(done){
      $rootScope.onUpdate = function(){};
      $rootScope.todo = new Todo({id: 1, content: 'a', done: false});
      
      spyOn($rootScope, 'onUpdate');
      spyOn($rootScope.todo, 'save').and.callFake(function(){
        return deferred.promise;
      });
      
      var element = angular.element('<div todo-item="todo" todo-item-updated="onUpdate"></div>');
      $compile(element)($rootScope);
      $rootScope.$digest();
      
      setTimeout(function(){
        element.find('input')[0].click();
        expect($rootScope.todo.save).toHaveBeenCalled();
        expect($rootScope.onUpdate).toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
