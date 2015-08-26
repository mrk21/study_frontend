describe('filters.uppercase', function() {
  beforeEach(module('TodoApp'));
  
  var $filter;
  
  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));
  
  it('should be uppercase', function() {
    var uppercase = $filter('uppercase');
    expect(uppercase('hello, world!')).toEqual('HELLO, WORLD!');
  });
});
