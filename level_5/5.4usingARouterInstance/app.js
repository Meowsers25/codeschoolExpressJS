//Let's refactor app.js to use a Router object

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// In memory store for the
// cities in our application
var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.param('name', function (request, response, next) {
  request.cityName = parseCityName(request.params.name);
});

//Create a new router object and assign it to the router variable.
var router = express.Router();

/*When we are done, our router will be mounted on the /cities path.
With this in mind, change app.route('/cities') to use router and
map requests to the root path.*/
router.route('/')
  .get(function (request, response) {
    if(request.query.search){
      response.json(citySearch(request.query.search));
    }else{
      response.json(cities);
    }
  })

  .post(parseUrlencoded, function (request, response) {
    if(request.body.description.length > 4){
      var city = createCity(request.body.name, request.body.description);
      response.status(201).json(city);
    }else{
      response.status(400).json('Invalid City');
    }
  });

/*Likewise, let's move our '/cities/:name' route to our router.
Remember to update the path.*/
router.route('/:name')
  .get(function (request, response) {
    var cityInfo = cities[request.cityName];
    if(cityInfo){
      response.json(cityInfo);
    }else{
      response.status(404).json("City not found");
    }
  })

  .delete(function (request, response) {
    if(cities[request.cityName]){
      delete cities[request.cityName];
      response.sendStatus(200);
    }else{
      response.sendStatus(404);
    }
  });

//Our router is now ready to be used by app.
//Mount our new router under the /cities path.
app.use('/cities', router);
// Searches for keyword in description
// and returns the city
function citySearch(keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}

// Adds a new city to the
// in memory store
function createCity(name, description){
  cities[name] = description;
  return name;
}

// Uppercase the city name.
function parseCityName(name){
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}

app.listen(3000);
