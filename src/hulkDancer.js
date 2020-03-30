var HulkDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hulkDancer');
  this.$node.attr('src', '../hulk.gif');
}
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// var oldStep = this.step;
HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;


HulkDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  // this.$node.animate({height: 150%,
  //                     width: 150%});



};