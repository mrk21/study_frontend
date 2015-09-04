describe('controller.TodoController', function() {
  var $rootScope, $httpBackend, controller, Todo;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(_$rootScope_, $controller, _$httpBackend_, _Todo_){
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    Todo = _Todo_;
    
    controller = $controller('TodoController', {
      $scope: $rootScope,
      Todo: Todo
    });
  }));
  
  describe('`todos` data', function(){
    it('should be constructed from the JSON returned from `/api/todos`', function(){
      var response = '[{"id": 1, "content": "test", "done": false}]';
      var expected =  [{"id": 1, "content": "test", "done": false}];
      
      $httpBackend.when("GET", "/api/todos").respond(response);
      $httpBackend.flush();
      
      var actual = $rootScope.todos.map(function(r){ return r.toJSON(); });
      expect(actual).toEqual(expected);
    });
  });
});
