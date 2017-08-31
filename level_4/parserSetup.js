var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

app.post('/cities',parseUrlencoded, function (request, response) {
  //createCity(name, description);
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};
