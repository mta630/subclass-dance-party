// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<img class="dancer"></img>');
  this._top = top;
  this._left = left;

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this._top, this._left);
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.lineUp = function (top) {
  this.$node.animate({
    top: top,
    left: this.left
  }, 2000);
}