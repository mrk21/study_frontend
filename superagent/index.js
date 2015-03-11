var request = require('superagent');

request
  .get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp')
  .end(function(res){
    console.log(res.text);
  })
;
