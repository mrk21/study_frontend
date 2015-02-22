var createElement = require('../index.js');

describe('jQuery sample', function() {

  it('should create div element', function() {
    expect(createElement).to.be.Function;
    var div = createElement();
    expect(div).to.be.Array;
  });

});
