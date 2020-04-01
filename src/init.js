$(document).ready(function () {
  const hulkSmash = new Audio('./smash.wav')
  hulkSmash.volume = 0.04;

  window.dancers = [];
  window.dancerNames = [];
  window.isHulkAngry = false;

  //Check for symbiotic relationship
  window.setInterval(function () {
    if ((window.dancerNames.indexOf("SpiderDancer") !== -1) && (window.dancerNames.indexOf("SymbioteDancer") !== -1)) {
      if (collision($(".SpiderDancer"), $(".SymbioteDancer"))) {
        $(".SpiderDancer").hide();
        $(".SymbioteDancer").attr('src', './img/venom.gif');
        $(".SymbioteDancer").css({
          width: "170px",
          height: "auto"
        });
      }
    }
  }, 200); //check every 200ms


  var collision = function ($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) { return false; }
    return true;
  };



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


    $(`.${dancerMakerFunctionName}`).draggable();



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

      $('.HulkDancer').attr('src', './hulkTransition.gif');

      hulk.css({
        height: '300px',
        width: '320px'
      });

      $('.hulkAngry').html('calm down hulk');
      isHulkAngry = true;

    } else {

      var hulk = $(`.${'HulkDancer'}`);


      $('.HulkDancer').attr('src', './hulk1.gif');

      hulk.css({
        height: '250px',
        width: '200px'
      });

      $('.hulkAngry').html('hulk angry');
      isHulkAngry = false;
    }
  });
});




















