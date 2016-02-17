$(document).ready(function () {

  $('#submit').on('click', function(event){
    console.log('it is clicked');
    var name = $("#name");
    var email = $("#email");
    var number = $("#number");
    var message = $("#message");
    var required = [name, email, number, message,]
  });



});
