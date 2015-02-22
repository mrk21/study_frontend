var $ = require('jquery');

module.exports = function() {
  var div = $('<div />');
  $('body').append(div);
  return div;
};
