/*Now in the client.js file, complete the code for the $.get
function so that it calls the /cities URL path, and then runs
the appendToList function.*/

$(function(){

  $.get('/cities', appendToList ); 

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      list.push($('<li>', { text: cities[i] }));
    }
    $('.city-list').append(list);
  }
});

