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


  var height = $(".dancefloor").height() - 1000 * Math.random();
  var width = $(".dancefloor").width() - 1000 * Math.random();

  this.$node.animate({
    top: height.toString(),
    left: width.toString()
  }, 2000);

};
