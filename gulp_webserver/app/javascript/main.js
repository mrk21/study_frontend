document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('get_weather').addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/weather?q=Tokyo,jp');
    xhr.addEventListener('load', function() {
      alert(this.responseText);
    }, false);
    xhr.send();
  }, false);
}, false);
