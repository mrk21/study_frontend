document.addEventListener('DOMContentLoaded', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/values/index.json');
    xhr.addEventListener('load', function() {
        document.getElementById('result').innerHTML = this.responseText;
    }, false);
    xhr.send();
}, false);
