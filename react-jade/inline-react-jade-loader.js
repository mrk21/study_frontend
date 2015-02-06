// see: https://github.com/jbrantly/ts-jsx-loader/blob/master/index.js
var jade = require('react-jade');
var path = require('path')
var loaderUtils = require('loader-utils')

module.exports = function (content) {
  this.cacheable()
  var that = this;
  var replace = function (match, content) {
    if (match.match('//')) return '';
    try {
      var lines = content.split(/\n/);
      var minIndex = Math.min.apply(null, lines.map(function(v){
        return v.match(/^\s*/)[0].length;
      }));
      lines = lines.map(function(v){ return v.slice(minIndex); });
      return jade.compile(lines.join("\n"));
    }
    catch (ex) {
      that.emitError(ex)
      return match;
    }
  };
  
  return content
    .replace(/React\.jade\(`\n*([^`\\]*(\\.[^`\\]*)*)\s*`\)/gm, replace) // using template strings
    .replace(/React\.jade\(\/\*\n*((.|[\r\n])*?)\s*\*\/\)/gm, replace) // using multiline comments
}
