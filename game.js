$(document).ready(function() {
  var RandomNumber = Math.floor(Math.random() * 120) + 19;
  // The * 120 ) +19 specifices that we are looking for a random number from 19-120
  // Intiates a random number to begin the game

  $("#RandomNumber").text(RandomNumber);
  // Appending random number to the randomNumber id in the html doc
  //
  var crystal1 = Math.floor(Math.random() * 11 + 1);
  var crystal2 = Math.floor(Math.random() * 11 + 1);
  var crystal3 = Math.floor(Math.random() * 11 + 1);
  var crystal4 = Math.floor(Math.random() * 11 + 1);
  // Setting up random numbers for each gem (Between 1-12)

  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  // making our variables

  // A place to hold our variables

  $("#wins").text(wins);
  $("#losses").text(losses);

  //reseting the game once needed
  function reset() {
    RandomNumber = Math.floor(Math.random() * 120 + 19);
    console.log(RandomNumber);
    $("#RandomNumber").text(RandomNumber);
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
    myScore = 0;
    $("#MyScore").text(userTotal);
  }
  //adding wins to the MyScore
  function winner() {
    alert("You've collected the stones to defeat your enemy!");
    wins++;
    $("#wins").text(wins);
    reset();
  }
  //adding losses to the MyScore
  function loser() {
    alert("Thanos has defeated you!");
    losses++;
    $("#losses").text(losses);
    reset();
  }
  //OnClick events for each Gem
  $("#crystal1").on("click", function() {
    userTotal = userTotal + crystal1;
    $("#MyScore").text("MyScore " + MyScore);

    //If statements

    if (userTotal === RandomNumber) {
      winner();
    } else if (userTotal > RandomNumber) {
      loser();
    }
  });
  $("#crystal2").on("click", function() {
    userTotal = userTotal + crystal2;
    $("#MyScore").text("MyScore " + MyScore);
    // if statement
    if (userTotal === RandomNumber) {
      winner();
    } else if (userTotal > RandomNumber) {
      loser();
    }
  });
  $("#crystal3").on("click", function() {
    userTotal = userTotal + crystal3;
    $("#MyScore").text("MyScore " + MyScore);
    //If statements
    if (userTotal === RandomNumber) {
      winner();
    } else if (userTotal > RandomNumber) {
      loser();
    }
  });
  $("#crystal4").on("click", function() {
    userTotal = userTotal + crystal4;
    $("#MyScore").text("MyScore " + MyScore);

    if (userTotal === RandomNumber) {
      winner();
    } else if (userTotal > RandomNumber) {
      loser();
    }
  });
});
