describe('controller.TodoController', function() {
  var $rootScope, $httpBackend, controller;
  
  beforeEach(module('TodoApp'));
  
  beforeEach(inject(function(_$rootScope_, $controller, _$httpBackend_, $http){
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    
    controller = $controller('TodoController', {
      $scope: $rootScope,
      $http: $http
    });
  }));
  
  describe('`todos` data', function(){
    it('should be constructed from the JSON returned from `./data/todos.json`', function(){
      var response = '[{"id": 1, "content": "test", "done": false}]';
      var expected =  [{"id": 1, "content": "test", "done": false}];
      
      $httpBackend.when("GET", "./data/todos.json").respond(response);
      $httpBackend.flush();
      expect($rootScope.todos).toEqual(expected);
    });
  });
});
