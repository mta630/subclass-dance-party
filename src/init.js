$(document).ready(function () {
  const hulkSmash = new Audio('./smash.wav')
  hulkSmash.volume = 0.04;

  window.dancers = [];
  window.dancerNames = [];
  window.isHulkAngry = false;
  window.isFused = false;

  // var fusionLoop = function (){
  //   setInterval(function(){

  //   },3000)
  // }


  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (!window.dancerNames.includes(dancerMakerFunctionName)) {

      var newHeight = Math.floor(Math.random() * (600 - 200)) + 200;
      var newWidth = Math.floor(Math.random() * (1500 - 10)) + 10;
      // make a dancer with a random position
      var dancer = new dancerMakerFunction(newHeight, newWidth, Math.random() * 1000);


      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer);
      window.dancerNames.push(dancerMakerFunctionName);
    } else {
      $(`.${dancerMakerFunctionName}`).toggle();
    }



    $(".MystiqueDancer").click(function (e) {
      var mystiqueIndex = window.dancerNames.indexOf('MystiqueDancer');
      var mystique = window.dancers[mystiqueIndex];
      console.log(mystique);
      mystique.changeCharacter();
    });
  });

  $('.lineupButton').on('click', function (event) {
    window.dancers.forEach(function (dancer) {
      dancer.lineUp();
      dancer.isMoving = false;
    });
  });

  $('.startMoving').on('click', function (event) {
    window.dancerNames.forEach(dancerName => $(`.${dancerName}`).stop());
    window.dancers.forEach(dancer => dancer.isMoving ? dancer.isMoving = false : dancer.isMoving = true);
    console.log(window.dancers[0].isMoving);
  });






  $('.hulkAngry').on('click', function (event) {
    if (!window.isHulkAngry) {
      hulkSmash.play(); //sound effect

      var hulk = $(`.${'HulkDancer'}`);
      console.log(hulk);

      hulk.fadeOut(function () {
        $(this).load(function () { $(this).fadeIn(300); });
        $(this).attr('src', './hulkTransition.gif');
      });

      hulk.animate({
        height: '300px',
        width: '320px'
      });

      $('.hulkAngry').html('calm down hulk');
      isHulkAngry = true;

    } else {

      var hulk = $(`.${'HulkDancer'}`);


      hulk.fadeOut(function () {
        $(this).load(function () { $(this).fadeIn(300); });
        $(this).attr('src', './hulk1.gif');
      });

      hulk.animate({
        height: '250px',
        width: '200px'
      });

      $('.hulkAngry').html('hulk angry');

    }
  });
});




















