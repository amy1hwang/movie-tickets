function Movie(title, time, age, quantity) {
  debugger;
  this.title = title;
  this.time = time;
  this.age = age;
  this.quantity = parseInt(quantity);
}
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// user interface logic
$(document).ready(function() {

 function resetField() {
   $("input#new-title").val("");
   $("input#new-time").val("");
   $("input.new-age").val("");
 }
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("select#new-title").val();
    var inputtedTime = $("select#new-time").val();
    var inputtedAge = $("select#new-age").val();
    var inputtedQuantity = $("select#new-quantity").val();


    var newMovie = new Movie(inputtedTitle, inputtedTime, inputtedAge, inputtedQuantity);

    $(".ticket-selector-two").not(document.getElementById("appended-selector")).css("display", "none");
    var cost = function() {
              if (newMovie.age == "child"){
                alert("You must be 17 or over to watch these movies.");
                $("#show-confirmation").hide();
              } else if (newMovie.time == "matinee") {
                if (newMovie.age == "senior") {
                  return 6 * newMovie.quantity * .75
                } else if (newMovie.age == "adult") {
                  return 6 * newMovie.quantity
                }
              } else if (newMovie.time == "evening") {
                  if (newMovie.age == "senior") {
                  return 10 * newMovie.quantity * .75
                } else if (newMovie.age == "adult") {
                  return  10 * newMovie.quantity
                }
              }  else if (newMovie.time == "midnight") {
                  if (newMovie.age == "senior") {
                  return 13 * newMovie.quantity * .75
                } else if (newMovie.age == "adult") {
                  return  13 * newMovie.quantity
                }
              }
            };
    $("#show-confirmation").show();
    $("#show-confirmation h3").text(newMovie.title);
    $(".movie-title").text(newMovie.title);
    $(".show-time").text(newMovie.time);
    $(".quantity").text(newMovie.quantity);
    $(".cost").text(cost());
    if (newMovie.title == "Alien") {
      $("img#alien").show();
      $("img#halloween").hide();
      $("img#shining").hide();
      $("img#scream").hide();
    } else if (newMovie.title == "Halloween") {
      $("img#halloween").show();
      $("img#alien").hide();
      $("img#shining").hide();
      $("img#scream").hide();
    } else if (newMovie.title == "The Shining") {
      $("img#shining").show();
      $("img#alien").hide();
      $("img#halloween").hide();
      $("img#scream").hide();
    } else {
      $("img#scream").show();
      $("img#halloween").hide();
      $("img#shining").hide();
      $("img#alien").hide();
    }
  return resetField();
});
});
