var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};


/*Call app.param() to intercept requests that contain an 
argument called 'name'. Remember app.param() takes a callback 
function as its second argument, which uses the same signature 
as a middleware.*/

app.param('name', function(request, response, next){
    
  /*Inside the app.param() callback function, call the
  parseCityName() function with the submitted name parameter.
  Set the return value to a new property in the request
  object called cityName.*/
  
  request.cityName = parseCityName(request.params.name);
  
  /*Finally, call a function that moves processing to 
  the next function in the stack.*/
  
  next();
});

app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json("City not found");
  }
});

function parseCityName(name){
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

app.listen(3000);                                                                                                                                                                                                                                                                                                            
