var HulkDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('HulkDancer');
  this.$node.attr('src', './hulk1.gif');
};

HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;


HulkDancer.prototype.step = function () {
  Dancer.prototype.step.call(this)

  this.$node.css({
    animation: "twist 2s infinite"
  });

  var dimensions = this.getRandomDimension();

  if (this.isMoving) {
    this.$node.animate({
      top: dimensions[0],
      left: dimensions[1]
    }, 2000);
  }

};



