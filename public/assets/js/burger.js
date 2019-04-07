$(document).ready(function (){
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgername").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/newburger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    // console.log("hello");
})
