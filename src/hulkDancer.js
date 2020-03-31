var HulkDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('HulkDancer');
  this.$node.attr('id', 'hulk1 hulk2 hulk3')
  this.$node.attr('src', './hulk1.gif');
}

HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;


HulkDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  // this.$node.animate({
  //   height: "300px",
  //   width: "250px"
  // }, 2000);

  this.$node.css({
    animation: "twist 2s infinite"
  });

  this.animateDiv(this.$node);

  // this.$node.animate({
  //   height: "114px",
  //   width: "100px"
  // }, 2000);

};

