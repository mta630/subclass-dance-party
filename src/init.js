$(document).ready(function () {
  window.dancers = [];
  window.dancerNames = [];
  window.isHulkAngry = false;

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (!window.dancerNames.includes(dancerMakerFunctionName)) {

      var newHeight = Math.floor(Math.random() * (700 - 200)) + 200;
      var newWidth = Math.floor(Math.random() * (1700 - 10)) + 10;
      // make a dancer with a random position
      var dancer = new dancerMakerFunction(newHeight, newWidth, Math.random() * 1000);


      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer);
      window.dancerNames.push(dancerMakerFunctionName);
    } else {
      $(`.${dancerMakerFunctionName}`).toggle();
    }
  });

  $('.lineupButton').on('click', function (event) {
    window.dancers.forEach(dancer => dancer.lineUp());
  });

  $('.startMoving').on('click', function (event) {
    window.dancers.forEach(dancer => dancer.isMoving ? dancer.isMoving = false : dancer.isMoving = true);
    console.log(window.dancers[0].isMoving);
  });

  // $('.hulkAngry').on('click', function (event) {
  //   var name = $(this).data('data-hulk-angry');
  //   var hulk = $(`.${"HulkDancer"}`);

  //   hulk.fadeOut('fast', function () {
  //     hulk.attr('src', './hulkTransition.gif');
  //     hulk.fadeIn('fast');
  //     hulkAngry = true;
  //   });

  //   hulk.animate({
  //     height: "200px",
  //     width: "220px"
  //   })
});




















