var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BlinkyDancer');
  this.$node.attr('src', './nightcrawler.gif');
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  this.$node.css({ animation: "blink 1s linear infinite" });
  var dimensions = this.getRandomDimension();

  if (this.isMoving){
    setTimeout(this.setPosition(dimensions[0], dimensions[1], Math.random() * 1000), 1001);
  }
};

