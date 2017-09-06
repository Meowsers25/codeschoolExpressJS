//Let's start coding our Express application.

//In our app.js, require the express module and
//assign it to the express variable.
var express = require('express');

/*Using the function assigned to express, create
an application instance and assign it to the app variable.*/
var app = express();

/*Using our application instance, app, create a new route
that accepts GET requests on the /locations URL path.
Remember to pass a callback function which takes a request and response.*/
app.get('/locations', function(request, response) {
  /*Respond with an array of city names. The city names should
  be Caspiana, Indigo and Paradise.*/
  response.send(["Caspiana", "Indigo", "Paradise"]);
});
//Bind our application to port 3001.
app.listen(3001, function(){
  /*When our application is ready to receive requests,
  print the string "Running Express" to the console.*/
  console.log("Running Express");
});
