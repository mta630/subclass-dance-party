$(document).ready(function () {
  window.dancers = [];
  window.dancerNames = [];
  window.isHulkAngry = false;

  $('.addDancerButton').on('click', function (event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (!window.dancerNames.includes(dancerMakerFunctionName)) {
      // make a dancer with a random position
      var dancer = new dancerMakerFunction(
        $(".dancefloor").height() * Math.random(),
        $(".dancefloor").width() * Math.random(),
        Math.random() * 1000
      );


      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer);
      window.dancerNames.push(dancerMakerFunctionName)
    } else {
      $(`.${dancerMakerFunctionName}`).toggle();
    }
  });

  $('.lineupButton').on('click', function (event) {
    // window.dancers.forEach(dancer => {
    //   lineup dancers to center of page
    // })
  });

  $('.hulkAngry').on('click', function (event) {
    var name = $(this).data('data-hulk-angry');
    console.log(name);
    var hulk = $(`.${name}`);

    hulk.fadeOut('fast', function () {
      hulk.attr('src', './hulkTransition.gif');
      hulk.fadeIn('fast');
      hulkAngry = true;
    });
  });
})




















