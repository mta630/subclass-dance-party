describe('mystiqueDancer', function () {

  var mystiqueDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    mystiqueDancer = new MystiqueDancer(10, 20, timeBetweenSteps);
  });

  it('should have a click event that changes the current character', function () {
    sinon.spy(mystiqueDancer.$node, 'attr');
    mystiqueDancer.changeCharacter();
    expect(mystiqueDancer.$node.attr.called).to.be.true;
  });
});