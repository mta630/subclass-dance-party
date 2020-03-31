var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BlinkyDancer');
  this.$node.attr('src', '../nightCrawler.gif');
}
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// var oldStep = this.step;
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  this.$node.fadeOut(500);

  setTimeout(this.setPosition($(".dancefloor").height() - 1000 * Math.random(),
    $(".dancefloor").width() - 1000 * Math.random(),
    Math.random() * 1000), 1001);

  this.$node.fadeIn(500);
};

