describe('hulkDancer', function () {

  var hulkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    hulkDancer = new HulkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(hulkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates the hulk', function () {
    sinon.spy(hulkDancer.$node, 'css');
    hulkDancer.step();
    expect(hulkDancer.$node.css.called).to.be.true;
  });
});