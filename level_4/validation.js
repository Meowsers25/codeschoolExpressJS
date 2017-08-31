var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
    
  /*Add an if block that checks for a description.length greater
  than 4, and move our city creation logic into that block. Use
  json() to send the results from createCity back to the client.*/
  if(request.body.description.length > 4){
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
   } else {
       
     /*If description does not match its minimum length requirements,
     then set a 400 status code (Bad Request) to the response, and
     set the response body to Invalid City using json().*/
     response.status(400).json('Invalid City');
   } 
});

app.listen(3000);
 