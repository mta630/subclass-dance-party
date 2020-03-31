$(document).ready(function () {
  window.dancers = [];
  window.dancerNames = [];

  $('.addDancerButton').on('click', function (event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (!window.dancerNames.includes(dancerMakerFunctionName)) {
      // make a dancer with a random position
      console.log(this);
      var dancer = new dancerMakerFunction(
        $(".dancefloor").height() - 1000 * Math.random(),
        $(".dancefloor").width() - 1000 * Math.random(),
        Math.random() * 1000
      );


      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer);
      window.dancerNames.push(dancerMakerFunctionName)
    } else {
      console.log(dancerMakerFunctionName);
      $(`.${dancerMakerFunctionName}`).toggle();
    }
  });

  $('.lineupButton').on('click', function (event) {
    // window.dancers.forEach(dancer => {
    //   lineup dancers to center of page
    // })
  });




});



















