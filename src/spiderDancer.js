var SpiderDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('SpiderDancer');
  this.$node.attr('src', './spider.gif');
}
SpiderDancer.prototype = Object.create(Dancer.prototype);
SpiderDancer.prototype.constructor = SpiderDancer;


SpiderDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.css({
    animation: "spin 1s linear infinite"
  });

  var dimensions = this.getRandomDimension();


  // this.$node.animate({
  //   top: dimensions[0],
  //   left: dimensions[1]
  // }, 2000);


};
