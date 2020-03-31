var HulkDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('HulkDancer');
  this.$node.attr('src', '../hulk.gif');
}
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// var oldStep = this.step;
HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;


HulkDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  // this.$node.animate({
  //   height: "300px",
  //   width: "250px"
  // }, 2000);
  // this.$node.animate({
  //   height: "114px",
  //   width: "100px"
  // }, 2000);

  // this.$node.css({
  //   animation: "spin 1s linear infinite"
  // });

  this.$node.css({
    animation: "twist 2s infinite"
  });

  var height = $(".dancefloor").height() - 1000 * Math.random();
  var width = $(".dancefloor").width() - 1000 * Math.random();

  this.$node.animate({
    top: height.toString(),
    left: width.toString()
  }, 2000);

};

