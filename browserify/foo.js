module.exports = (function() {
  function Foo(name) {
    this.name = name;
  }

  Foo.prototype.method = function method() {
    return this.name;
  };

  return Foo;
})();
