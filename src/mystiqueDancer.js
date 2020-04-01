var MystiqueDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('MystiqueDancer');
  this.$node.attr('id', 'MystiqueDancer');
  this.$node.attr('src', './img/mystique.gif');
};
MystiqueDancer.prototype = Object.create(Dancer.prototype);
MystiqueDancer.prototype.constructor = MystiqueDancer;

MystiqueDancer.prototype.changeCharacter = function () {
  var charArr = ["./img/mystique.gif", "./img/beast.gif", "./img/cyclops.gif", "./img/gambit.gif", "./img/jube.gif", "./img/Juggernaut.gif", "./img/ProfX.gif", "./img/storm.gif"];
  var randomImage = charArr[Math.floor(Math.random() * charArr.length)];
  this.$node.attr('src', randomImage);
};



MystiqueDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.css({
    animation: "rock 2s linear infinite"
  });

  var dimensions = this.getRandomDimension();


  if (this.isMoving) {
    this.$node.animate({
      top: dimensions[0],
      left: dimensions[1]
    }, 4000);
  } else {
    this.$node.stop();
  }
};
