var SpiderDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('SpiderDancer');
  this.$node.attr('src', './spider.gif');
}
SpiderDancer.prototype = Object.create(Dancer.prototype);
SpiderDancer.prototype.constructor = SpiderDancer;


SpiderDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  // this.$node.animate({
  //   height: "300px",
  //   width: "250px"
  // }, 2000);
  // this.$node.animate({
  //   height: "114px",
  //   width: "100px"
  // }, 2000);

  this.$node.css({
     animation: "spin 1s linear infinite"
  });

  // this.$node.css({
  //   animation: "twist 2s infinite"
  // });

  var height = $(".dancefloor").height() - 1000 * Math.random();
  var width = $(".dancefloor").width() - 1000 * Math.random();

  this.$node.animate({
    top: height.toString(),
    left: width.toString()
  }, 2000);

};
