/*Change the code in app.js to use the express-static middleware
instead of the response.sendFile() function.*/

var express = require('express');
var app = express();

//Remove our app.get() containing the root '/' route.
/*app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});*/

//Mount the static middleware and serve files under the public directory.
app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);
