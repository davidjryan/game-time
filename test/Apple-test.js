const {assert, expect, should} = require('chai');
const Apple = require('../lib/apple');

describe('Apple', function() {
  it('should be a function', function() {
    assert.isFunction(Apple);
  });
  it('should be an object', function(){
    const apple = new Apple();

    assert.isObject(apple);
  });
  it('should have a color', function() {
    const apple = new Apple();

    assert.equal( apple.color, 'rgb(213, 16, 16)' );
  });
  it('should have an x and y position', function() {
    const apple = new Apple();

    assert.equal( typeof(apple.xPosition), 'number' );
    assert.equal( typeof(apple.yPosition), 'number' );
  });
  it('should generate a new x and y position between 0 and 29', function() {
    const apple = new Apple();
    apple.generateRandomLocation();

    assert.isAbove( apple.xPosition, -1 );
    assert.isBelow( apple.yPosition, 31 );
  });
  it.skip('should be able to draw itself', function() {

  })
})
