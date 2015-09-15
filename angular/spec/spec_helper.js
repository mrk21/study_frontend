function DirectiveTestHelper(){
  this.initialize.apply(this, arguments);
}
DirectiveTestHelper.prototype = {
  initialize: function(){
    var self = this;
    
    inject(function(_$compile_, _$rootScope_, _$templateCache_, _$httpBackend_){
      self.compile = _$compile_;
      self.rootScope = _$rootScope_;
      self.templateCache = _$templateCache_;
      self.httpBackend = _$httpBackend_;
    });
  },
  
  setTemplate: function(path){
    var template = window.__html__[path];
    this.templateCache.put(path, template);
  },
  
  build: function(html){
    this.element = angular.element(html);
    this.compile(this.element)(this.rootScope);
    this.rootScope.$digest();
    this.scope = this.rootScope.$$childHead;
  }
};
