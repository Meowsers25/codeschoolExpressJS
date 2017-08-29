var express = require('express');
var app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];

/*Create a new route for GET requests to '/cities'. 
The second argument should be a callback 
function which takes request and response.*/
app.get('/cities', function(request, response) {
  /*From inside of our route, create an if statement 
    that checks whether a value is set to the query
    string parameter search.*/
  if(request.query.search){
    /*Inside of the if block, call the citySearch() 
    function, passing in the user submitted parameter 
    for search. Then return the result of the function 
    as a JSON response.*/
    
    var results = citySearch(request.query.search);
    response.json(results);
  }
 });



function citySearch (keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}

app.listen(3000);
