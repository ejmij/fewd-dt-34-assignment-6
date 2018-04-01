//PSEUDOCODE//
//create an array of the city type
//use for loop to add the values to the dropdown-menu
//prevent default action (submit btn)
//use new variable to change the backgroud image

$(document).ready(function(){

  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  for(i = 0; i < cities.length; i++) {
      $("select").append('<option>'+cities[i]+'</option>')
      $("select").attr('class','dropdown-menu');
  }

  $('#dropdown-menu').change(function(){
      event.preventDefault();
      
      var input = $('#city-type').val();

      if (input === "NYC") {
        $('body').attr('class','nyc');
      }
      else if (input === "SF"){
        $('body').attr('class','sf');
      }
      else if (input === "LA"){
        $('body').attr('class','la');
      }
      else if (input === "ATX"){
        $('body').attr('class','austin');
      }
      else if (input === "SYD"){
        $('body').attr('class','sydney');
      }
  });

});